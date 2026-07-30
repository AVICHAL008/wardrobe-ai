import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-xl
            border
            px-4
            py-3
            bg-slate-900/60
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                : "border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}