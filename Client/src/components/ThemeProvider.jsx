import React from "react";

function ThemeProvider({ children }) {
  return (
    <div className="">
      <div className="bg-white text-gray-900 dark:bg-[rgb(4,9,20)] dark:text-gray-200 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
