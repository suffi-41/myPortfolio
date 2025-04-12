import React from "react";

export default function ScrollProgess({ value }) {
  return (
    <div className="w-full rounded-full  h-2 relative flex">
      <div
        className="bg-blue-600 rounded-sm transition-all duration-100 ease-out "
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
