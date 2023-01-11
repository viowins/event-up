import React from "react";

export default function SubTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <img src="/ui/line.svg" alt="line" draggable="false" />
      <span className="text-neutral-200 text-sm md:text-lg font-medium">
        {children}
      </span>
    </div>
  );
}
