import React from "react";

interface BadgeRoundedProps {
  text: string;
}

const BadgeRounded: React.FC<BadgeRoundedProps> = ({ text }) => {
  return (
    <>
      <div className="flex items-center leading-3 p-2 rounded-full bg-zinc-200 text-zinc-800 text-sm font-medium">
        {text}
      </div>
    </>
  );
};

export default BadgeRounded;
