import React from "react";

type FretboardDisplayProps = {
  key: any;
  isLast: boolean;
  onClick?: (e: any) => void;
};
export default function FretboardCell({
  key,
  isLast,
  onClick,
}: FretboardDisplayProps) {
  return (
    <div
      key={key}
      className={
        "flex flex-grow hover:bg-gray-100 relative border-l border-gray-300 box-content" +
        (isLast ? " border-r" : "")
      }
      onClick={onClick}
    >
      <div className="w-full border-t border-gray-200 absolute top-1/2"></div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}
