import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <div className="border-t-transparent w-16 h-16 border-4 border-red-500 border-double rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
