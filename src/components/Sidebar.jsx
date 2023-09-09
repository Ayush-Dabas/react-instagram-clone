import React from "react";
// import { IconContext } from "react-icons";

import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CgAddR } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-black text-white max-w-1/2 text-[14px] shadow-mg">
      <h1 className="logo px-5 py-5 italic">Instagram</h1>
      <a className="home px-5 py-5 hover:font-bold active:font-bold" href="/">
        <AiOutlineHome className="inline mr-2" style={{ fontSize: "20px" }} />
        Home
      </a>
      <a href="/" className="search px-5 py-5 hover:font-bold active:font-bold">
        <AiOutlineSearch className="inline mr-3" style={{ fontSize: "20px" }} />
        Search
      </a>
      <a
        href="/"
        className="explore px-5 py-5 hover:font-bold active:font-bold"
      >
        <MdOutlineExplore
          className="inline mr-3"
          style={{ fontSize: "20px" }}
        />
        Explore
      </a>
      <a href="/" className="reels px-5 py-5 hover:font-bold active:font-bold">
        <TfiVideoClapper className="inline mr-3" style={{ fontSize: "20px" }} />
        Reels
      </a>
      <a
        href="/"
        className="messages px-5 py-5 hover:font-bold active:font-bold"
      >
        <PiTelegramLogoLight
          className="inline mr-3"
          style={{ fontSize: "20px" }}
        />
        Messages
      </a>
      <a href="/" className="notif px-5 py-5 hover:font-bold active:font-bold">
        <AiOutlineHeart className="inline mr-3" style={{ fontSize: "20px" }} />
        Notifications
      </a>
      <a href="/" className="create px-5 py-5 hover:font-bold active:font-bold">
        <CgAddR className="inline mr-3" style={{ fontSize: "20px" }} />
        Create
      </a>
      <a
        href="/"
        className="profile px-5 py-5 hover:font-bold active:font-bold"
      >
        Profile
      </a>
      <a href="/" className="more px-5 py-5 hover:font-bold active:font-bold">
        More
      </a>
    </div>
  );
};

export default Sidebar;
