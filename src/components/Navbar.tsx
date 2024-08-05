import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleConsole = () => {
    console.log({
      yourTypedwords: value,
      mydesire:
        "I will be very grateful if i'm selected for this internship to build that experience of working with a tem",
      assignment: "AirBnb clone by Code With Zosh",
      myCountry: "Nigeria",
    });
    setValue("")
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`container w-full z-50 ${
        isSticky &&
        "sticky top-0 bg-airbnb-bg-white border-b border-gray-100 shadow-md pb-2"
      }`}
    >
      <div className={`hidden md:flex border-b  border-gray-100`}>
        <div className="p-5 flex justify-between w-full items-start">
          <div className=" items-center hidden md:flex">
            <img src="/src/assets/airbnb-logo.jpeg" className="w-12 h-12" />
            <p className="text-airbnb-bg-red text-2xl font-semibold tracking-tight">
              airbnb
            </p>
          </div>
          <div className="flex-1 relative">
            <div
              className={`flex justify-center gap-3 mb-2 font-light ${
                isSticky && "hidden"
              } `}
            >
              <div className="hover:bg-airbnb-hover cursor-pointer p-3 rounded-full">
                Stays
              </div>
              <div className="hover:bg-airbnb-hover cursor-pointer p-3 rounded-full">
                Experiences
              </div>
            </div>

            <div
              className={`flex w-full ${
                isSticky && "md:max-w-[400px] mx-auto"
              } justify-evenly  border rounded-full border-gray-50`}
            >
              <div className=" hover:bg-airbnb-hover w-full rounded-full text-[12px] p-3">
                <p className="">Where</p>
                <input
                  placeholder="Search destination"
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  className="hover:bg-airbnb-hover w-full outline-none focus:outline-none active:outline-none "
                />
              </div>
              <div
                className={`${
                  isSticky && "hidden"
                } text-[12px] w-full hover:bg-airbnb-hover rounded-full p-3`}
              >
                <p>check in</p>
                <p>Add Dates</p>
              </div>
              <div
                className={`${
                  isSticky && "hidden"
                } text-[12px] w-full hover:bg-airbnb-hover rounded-full p-3`}
              >
                <p>check out</p>
                <p>Add Dates</p>
              </div>
              <div className="text-[12px] w-full flex items-center justify-between hover:bg-airbnb-hover rounded-full p-3">
                <div className="">
                  <p>Who</p>
                  <p>Add guests</p>
                </div>

                <div
                  onClick={handleConsole}
                  className="w-10 h-10 bg-airbnb-bg-red rounded-full items-center cursor-pointer justify-center flex"
                >
                  <SearchIcon
                    className="text-airbnb-bg-white "
                    fontSize="medium"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" justify-evenly items-center hidden md:flex">
            <div className="p-3 hover:bg-airbnb-hover rounded-3xl cursor-pointer">
              <p className="text-[14px] font-semibold">Airbnb your home</p>
            </div>
            <div className="hover:bg-airbnb-hover cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
              <LanguageIcon />
            </div>
            <div className="w-[86px] h-[48px] p-5 cursor-pointer rounded-full border flex items-center justify-center hover:shadow-lg">
              <MenuIcon />
              <AccountCircleRoundedIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between md:hidden  items-center border p-2 rounded-full shadow-md mt-3">
        <SearchIcon />
        <div className="text-[12px] flex-1">
          <h1 className="font-semibold">Where to?</h1>
          <div className="flex items-center gap-1 font-light">
            <span>.Anywhere</span>
            <span>.Any week</span>
            <span>.Add guests</span>
          </div>
        </div>
      </div>

      <Filters />
    </div>
  );
};

export default Navbar;
