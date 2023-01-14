import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const langDropdown = (e) => {
    setOpen((open) => !open);
  };
  useEffect(() => {
    window.onclick = function (e) {
      if (!e.target.matches("#LanguageDropdown")) {
        setOpen((open) => false);
      }
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        id="LanguageDropdown"
        className="flex items-center border border-neutral-50 rounded-lg gap-x-4 py-3 px-4"
        type="button"
        onClick={langDropdown}
      >
        <div className="flex items-center text-md text-neutral-500 pointer-events-none">
          <img
            src="/ui/united-states.svg"
            alt="United States"
            draggable="false"
          />
          English (US)
        </div>
        <img
          className="shrink-0 pointer-events-none"
          src="/ui/chevron-down.svg"
          alt="Chevron Down"
          draggable="false"
        />
      </button>
      <div
        className={`absolute z-10 bottom-full w-full mb-4 border border-neutral-50 rounded-lg py-3 px-4 bg-white ${
          open ? "block" : "hidden"
        }`}
      >
        <nav>
          <Link to="#" className="flex items-center">
            <img
              src="/ui/united-states.svg"
              alt="United States"
              draggable="false"
            />
            <span className="text-md text-neutral-500">English (US)</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
