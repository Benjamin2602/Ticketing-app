import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-gradient-to-r from-green-400 via-green-500 to-green-600";
    switch (status.toLowerCase()) {
      case "completed":
        color = "bg-gradient-to-r from-teal-400  to-lime-600";
        return color;
      case "in progress":
        color = "bg-gradient-to-r from-pink-400  to-pink-800";
        return color;
      case "started":
        color = "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600";
        return color;
      case "not started":
        color = "bg-gradient-to-r from-orange-400 to-red-700";
        return color;
      default:
        color = "bg-gradient-to-r from-green-400 via-green-500 to-green-600";
        return color;
    }
  };
  return (
    <span
      className={` font-medium rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
