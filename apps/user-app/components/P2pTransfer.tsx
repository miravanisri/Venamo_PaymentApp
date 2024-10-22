import { Card2 } from "@repo/ui/Card2";

export const P2pTransfer = ({
  transactionsSent,
  transactionsReceived,
}: {
  transactionsSent: { timeStamp?: Date; amount: number; name?: string }[];
  transactionsReceived: { timeStamp?: Date; amount: number; name?: string }[];
}) => {
  // Combine and sort transactions by timestamp (if available)
  const allTransactions = [...transactionsSent, ...transactionsReceived].sort(
    (a, b) =>
      (b.timeStamp?.getTime() || 0) - (a.timeStamp?.getTime() || 0)
  );

  if (!allTransactions.length) {
    return (
      <div className="text-center pb-8 pt-8 text-2xl">
        No Recent transactions
      </div>
    );
  }

  return (
    <Card2 title={"Recent Transactions"}>
      <div className="pt-2 mt-5">
        {allTransactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-4"
          >
            <div className="flex flex-col text-left font-semibold">
              <span>{t.name || "Unknown"}</span>
              {t.timeStamp && (
                <span className="text-gray-500 text-sm">
                  {t.timeStamp.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-right">
              <span className="font-semibold mr-60">
                Rs {t.amount / 100}
              </span>
            </div>
          </div>
        ))}
      
      </div>
    </Card2>
  );
};
