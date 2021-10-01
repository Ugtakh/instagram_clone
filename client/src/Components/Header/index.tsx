import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Avatar } from "@material-ui/core";
import "./style.scss";

const txtLogo = require("../../assets/images/textLogo.png");

const Header = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="aa"
        />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <div onClick={() => setSearchVal("")}>
          <CloseIcon />
        </div>
      </div>
      <div className="header__icon">
        <HomeIcon onClick={() => console.log("Home")} />
        <MessageOutlinedIcon onClick={() => console.log("Message")} />
        <ExploreIcon onClick={() => console.log("Explore")} />
        <FavoriteBorderIcon onClick={() => console.log("Favourite")} />
        <Avatar src="" onClick={() => console.log("Avatar")} />
      </div>
    </div>
  );
};

export default Header;
