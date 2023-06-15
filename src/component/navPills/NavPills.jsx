import React from "react";
import Button from "./Button";

const NavPills = () => {
  const pills = [
    "All",
    "Mixes",
    "Music",
    "T-Series",
    "Cricket",
    "Live",
    "Gaming",
    "Stock Markets",
    "Game Shows",
    "Computer Science",
    "Bollywood Music",
    "Bhajan",
  ];

  return (
    <div className="flex gap-3 py-3 sticky top-14 bg-white">
      {pills?.map((pill) => (
        <Button name={pill} key={pill}/>
      ))}
    </div>
  );
};

export default NavPills;
