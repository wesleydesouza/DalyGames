import React from "react";

interface LabelProps {
  name: string;
}

export const Label = ({ name }: LabelProps) => {
  return (
    <div className="flex-grow py-1 px-3 bg-stone-200 text-black text-center rounded-lg hover:font-bold duration-200 sm:flex-grow-0">
      {name}
    </div>
  );
};
