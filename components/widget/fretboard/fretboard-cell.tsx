import React from "react";

type FretboardDisplayProps = {
  key: any;
};
export default function FretboardCell({ key }: FretboardDisplayProps) {
  return (
    <div key={key} className="flex flex-grow hover:bg-gray-100 relative">
      <div className="w-full border-t border-gray-200 absolute top-1/2"></div>
      <div className="flex items-center justify-center w-full h-full border-l border-gray-300">
        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}
