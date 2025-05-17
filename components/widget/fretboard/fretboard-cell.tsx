import { X } from "lucide-react";
import React from "react";

// TODO - implement the props
type FretboardDisplayProps = {
  isFirst?: boolean;
  isLast?: boolean;
  isSelected?: boolean;
  isActive?: boolean;
  isMuted?: boolean;
  displayText?: string;
  onClick?: (e: any) => void;
};
export default function FretboardCell({
  isFirst,
  isLast,
  isSelected,
  isActive,
  isMuted,
  displayText,
  onClick,
}: FretboardDisplayProps) {
  return (
    <div
      className={`flex flex-grow hover:bg-gray-100 relative border-l border-gray-300 box-content ${
        isLast ? " border-r" : ""
      } ${isFirst ? "border-l-0" : ""}`}
      onClick={onClick}
    >
      {!isFirst && (
        <div className="w-full border-t border-gray-200 absolute top-1/2"></div>
      )}
      <div className="flex items-center justify-center w-full h-full">
        {isMuted ? (
          <X className="w-4 h-4 text-gray-400" />
        ) : (
          <div
            className={`z-10 w-4 h-4 rounded-full ${
              isSelected ? "bg-gray-800" : ""
            }`}
          ></div>
        )}
      </div>
    </div>
  );
}
