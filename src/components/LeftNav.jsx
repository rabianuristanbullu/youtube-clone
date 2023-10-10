import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  return (
    <div className="bg-dark text-white d-flex flex-column gap-4">
      {categories.map((item, index) => (
        <>
          <div
            style={{ cursor: "pointer" }}
            key={index}
            className={`p-2 ${selectedCategory === item.name && "bg-primary"} `}
            onClick={() => setSelectedCategory(item.name)}
          >
            <span>{item.icon}</span>
            <span className="mx-2 ">{item.name}</span>
          </div>
          {item.divider && <hr className="my-4" />}
        </>
      ))}
    </div>
  );
};

export default LeftNav;
