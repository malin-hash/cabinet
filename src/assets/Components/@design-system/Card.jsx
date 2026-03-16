import React from "react";

export default function Card({ background, id, color, name, number, avatar }) {
  return (
    <div
      className={`py-4 px-6 rounded-lg bg-${background} shadow-2xl mb-2`}
      key={id}
    >
      <p className={`font-semibold text-md text-${color} mb-2`}>{name}</p>
      <div className="flex justify-between">
        <div className="p-5 rounded-full bg-white/50 flex justify-center">
          <p className={`font-semibold text-lg px-1 `}>{number}</p>
        </div>
        <div className={`p-4 rounded-md`}>
          <p className={` text-3xl text-${color} `}>{avatar}</p>
        </div>
      </div>
    </div>
  );
}
