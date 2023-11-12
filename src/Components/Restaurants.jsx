import React, { useState } from "react";
import restaurants from "../assets/restaurant";
import ResCard from "./ResCard";

const Restaurants = () => {
  const [input, setInput] = useState("");

  return (
    <div className="container restaurant">
      <h1 className="text-xl font-bold ">Restaurants</h1>
      <input
        type="text"
        placeholder="Search Restaurant"
        onChange={(e) => setInput(e.target.value)}
      />

      {restaurants.map((ele) => {
        if (ele.name.toLowerCase().includes(input.toLowerCase())) {
          return <ResCard name={ele.name} />;
        }
      })}
    </div>
  );
};

export default Restaurants;
