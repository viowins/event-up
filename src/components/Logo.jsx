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
