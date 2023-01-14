import { Link } from "react-router-dom";

export default function Logo({ linked }) {
  return (
    <>
      {linked ? (
        <Link to="/">
          <img src="/Logo.svg" alt="Event Up Logo" draggable="false" />
        </Link>
      ) : (
        <img src="/Logo.svg" alt="Event Up Logo" draggable="false" />
      )}
    </>
  );
}

Logo.Black = function ({ linked }) {
  return (
    <>
      {linked ? (
        <Link to="/">
          <img src="/LogoBlack.svg" alt="Event Up Logo" draggable="false" />
        </Link>
      ) : (
        <img src="/LogoBlack.svg" alt="Event Up Logo" draggable="false" />
      )}
    </>
  );
};
