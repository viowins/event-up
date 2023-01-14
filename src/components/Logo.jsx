export default function Logo({ linked }) {
  return (
    <>
      {linked ? (
        <a href="/">
          <img src="/Logo.svg" />
        </a>
      ) : (
        <img src="/Logo.svg" />
      )}
    </>
  );
}

Logo.Black = function ({ linked }) {
  return (
    <>
      {linked ? (
        <a href="/">
          <img src="/LogoBlack.svg" />
        </a>
      ) : (
        <img src="/LogoBlack.svg" />
      )}
    </>
  );
};
