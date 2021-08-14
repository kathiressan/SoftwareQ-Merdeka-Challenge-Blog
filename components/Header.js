import {
  SearchIcon,
  MoonIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setDarkMode, setLightMode } from "../slices/darkmodeSlice";
import { useRouter } from "next/router";
import { Popover } from "@headlessui/react";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const getMode = useSelector(selectMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeMode = () => {
    if (getMode === false) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  };

  return (
    <header
      className={`top-0 z-50 grid grid-cols-3 p-5 fixed w-full justify-items-center items-center transition duration-200 ${
        scrolled && "bg-white shadow-lg dark:bg-gray-900"
      }`}
    >
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center cursor-pointer hover:scale-105 hover:opacity-80 transition duration-200 ease-out"
      >
        <div
          className={`text-white w-min p-5 rounded-full text-center font-mono font-bold text-xs sm:text-lg lg:text-2xl ${
            scrolled && "text-blue-500"
          }`}
        >
          <div>Kathi's Blog</div>
        </div>
      </div>

      {/* Middle - Search */}
      <div
        className={`flex items-center md:border-2 rounded-full py-2 md:shadow-sm sm:h-14 w-full border darkModeTransition ${
          scrolled && "dark:border-blue-500"
        }`}
      >
        <input
          className={`flex-grow pl-5 bg-transparent outline-none text-sm placeholder-white text-white ${
            scrolled && "text-blue-500 placeholder-blue-500"
          }`}
          type="text"
          placeholder="Search"
        />
        <SearchIcon
          className={`hidden md:inline-flex h-8 bg-white rounded-full p-2 cursor-pointer md:mx-2 ${
            scrolled ? "bg-blue-500 text-white" : "text-black"
          }`}
        />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        {!getMode ? (
          <MoonIcon
            onClick={changeMode}
            className={`text-white hidden sm:inline-flex icon darkModeTransition ${
              scrolled && "text-blue-500"
            }`}
          />
        ) : (
          <SunIcon
            onClick={changeMode}
            className={`text-white hidden sm:inline-flex icon darkModeTransition ${
              scrolled && "text-blue-500"
            }`}
          />
        )}
        <UserCircleIcon
          className={`text-white hidden sm:inline-flex icon ${
            scrolled && "text-blue-500"
          }`}
        />

        <Popover className="relative sm:hidden">
          <Popover.Button>
            <MenuIcon
              className={`text-white icon ${scrolled && "text-blue-500"}`}
            />
          </Popover.Button>

          <Popover.Panel className="absolute z-10">
            <div className="flex bg-white p-2 rounded-lg border">
              {!getMode ? (
                <MoonIcon
                  onClick={changeMode}
                  className={`text-black icon darkModeTransition ${
                    scrolled && "text-blue-500"
                  }`}
                />
              ) : (
                <SunIcon
                  onClick={changeMode}
                  className={`text-black icon darkModeTransition ${
                    scrolled && "text-blue-500"
                  }`}
                />
              )}
              <UserCircleIcon
                className={`text-black icon ${scrolled && "text-blue-500"}`}
              />
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
    </header>
  );
}
