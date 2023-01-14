import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="relative top-0 w-full text-white bg-neutral-800">
      <div className="container flex items-center justify-between mx-auto h-[80px] lg:h-[94px]">
        <Logo linked />
        <Header.Menu
          className={`${active ? "translate-x-0" : "translate-x-full"}`}
        />
        <div className="hidden lg:flex items-center gap-4">
          <Button
            className={
              "text-md rounded-lg transition-all duration-200 hover:bg-white hover:text-neutral-800"
            }
            href="/login"
          >
            Log In
          </Button>
          <Button.Primary className={"!text-md !py-[10px]"} href="/signup">
            Sign Up
          </Button.Primary>
        </div>
        <div
          className="block lg:hidden"
          onClick={() => setActive((active) => !active)}
        >
          <Button>
            {active ? (
              <img
                src="/ui/menuClose.svg"
                alt="Menu Outline"
                draggable="false"
              />
            ) : (
              <img src="/ui/menu.svg" alt="Menu Outline" draggable="false" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

Header.Menu = function ({ className }) {
  const menuItems = {
    home: {
      name: "Home",
      path: "/",
    },
    about: {
      name: "About",
      path: "/about",
    },
    pricing: {
      name: "Pricing",
      path: "/pricing",
    },
    career: {
      name: "Career",
      path: "/career",
    },
    blog: {
      name: "Blog",
      path: "/blog",
    },
  };
  return (
    <nav
      className={`absolute lg:relative top-[80px] lg:top-auto left-0 lg:left-auto w-full lg:w-auto h-[calc(100vh-80px)] lg:h-auto pt-6 lg:pt-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-10 text-white bg-neutral-800 lg:bg-transparent transition-all duration-500 ease-in-out ${
        className && className
      } lg:!translate-x-0`}
    >
      {Object.keys(menuItems).map((key, index) => {
        return (
          <a
            className="relative text-lg font-medium text-neutral-0 transition-all duration-150 hover:text-white before:absolute before:w-full before:h-[1px] before:-bottom-2 before:bg-primary-800 before:scale-x-0 before:origin-center before:transition-all before:duration-150 hover:before:scale-x-100"
            href={menuItems[key]["path"]}
            key={index}
          >
            {menuItems[key]["name"]}
          </a>
        );
      })}
      <div className="absolute bottom-4 flex lg:hidden mt-4 items-center gap-4">
        <Button href="/login">Log In</Button>
        <Button.Primary href="/signup">Sign Up</Button.Primary>
      </div>
    </nav>
  );
};
