import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  loading?: boolean;
}

function Button({ text, onClick, loading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Loading ..." : text}
    </button>
  );
};

export default Button;
