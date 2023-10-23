import React from "react";

const ProgressBarDisplay = () => {
  return (
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-100">
      <div
        class="bg-blue-600 h-2.5 rounded-full"
        style={{ width: "65%" }}
      ></div>
    </div>
  );
};

export default ProgressBarDisplay;