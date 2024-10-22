"use client";

export const TextInput = ({
    placeholder,
    onChange,
    label,
    disabled = false, // Add a disabled prop with a default value of false
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
    disabled?: boolean; // Declare the disabled prop as optional
}) => {
    return (
        <div className="pt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                disabled={disabled} // Set the disabled attribute based on the prop
            />
        </div>
    );
};
