"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [isSuccess, setIsSuccess] = useState(false); // Success state
  const [error, setError] = useState(""); // Error state

  const handleSend = async () => {
    setIsLoading(true); // Start loader
    setIsSuccess(false); // Reset success state
    setError(""); // Reset error state

    try {
      await p2pTransfer(number, Number(amount) * 100);
      setIsLoading(false); // Stop loader
      setIsSuccess(true); // Show success
    } catch (e) {
      setIsLoading(false);
      setError("Transaction failed. Please try again."); // Show error if transaction fails
    }
  };

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="Send">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder="Number"
              label="Number"
              onChange={(value) => setNumber(value)}
              disabled={isLoading || isSuccess} // Disable input when loading or success
            />
            <TextInput
              placeholder="Amount"
              label="Amount"
              onChange={(value) => setAmount(value)}
              disabled={isLoading || isSuccess} // Disable input when loading or success
            />
            <div className="pt-4 flex justify-center">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  {/* Tailwind Loader */}
                  <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                  <span className="text-gray-500 pt-2">Processing...</span>
                </div>
              ) : isSuccess ? (
                <div className="flex flex-col items-center">
                  <span className="text-6xl">✅</span> {/* Emoji for success */}
                  <span className="text-green-500 pt-2">Transaction Successful!</span>
                </div>
              ) : (
                <Button onClick={handleSend}>Send</Button>
              )}
            </div>

            {error && <div className="text-red-500 text-center pt-2">{error}</div>}
          </div>
        </Card>
      </Center>
    </div>
  );
}
