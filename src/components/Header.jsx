import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full text-white bg-neutral-800">
      <div className="container flex items-center justify-between mx-auto h-[80px] lg:h-[94px]">
        <Logo />
        <Header.Menu />
        <div className="hidden lg:flex items-center gap-4">
          <Button href="/login">Log In</Button>
          <Button.Primary href="/signup">Sign Up</Button.Primary>
        </div>
        <div className="block lg:hidden">
          <Button>
            <img src="/ui/menu.svg" alt="Menu Outline" draggable="false" />
          </Button>
        </div>
      </div>
    </header>
  );
}

Header.Menu = function () {
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
    <nav className="hidden lg:flex items-center gap-10 text-white">
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
    </nav>
  );
};
