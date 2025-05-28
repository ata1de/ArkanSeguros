import React from "react";

interface BadgeProps {
  status: "Pending" | "Success" | "Unfulfilled" | "Fulfilled";
  children?: React.ReactNode;
}

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  Success: "bg-green-100 text-green-800 border border-green-300",
  Unfulfilled: "bg-red-100 text-red-800 border border-red-300",
  Fulfilled: "bg-green-100 text-green-800 border border-green-300",
};

const TableBadge: React.FC<BadgeProps> = ({ status, children }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${statusStyles[status]}`}
    >
      {children || status}
    </span>
  );
};

export default TableBadge;
