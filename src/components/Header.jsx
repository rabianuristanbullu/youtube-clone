import React, { useState } from "react";
import { BsBell } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const [query, setQuery] = useState("");
  const handleSearch=()=>{
    if(!query)return;
    navigate(`/search-result/${query}`)
  }
  return (
    <header className="navbar bg-dark text-light">
      <Link className=" text-decoration-none text-light" to={"/"}>
        <h1>
          <img
            style={{ width: "100px" }}
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
            alt=""
          />
          YouTube
        </h1>
      </Link>

      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-secondary bg-dark outline-none">
          <BiSearchAlt2 />
        </button>
      </div>
      <span className="pe-4 fs-3">
        <BsBell />
      </span>
    </header>
  );
};

export default Header;
