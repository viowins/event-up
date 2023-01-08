export default function Button({ children, href }) {
  return (
    <>{href ? <a href={href}>{children}</a> : <button>{children}</button>}</>
  );
}

Button.Primary = function ({ children, href }) {
  return (
    <>
      {href ? (
        <a
          className="flex items-center gap-2 py-[10px] px-4 rounded-lg bg-primary-800 text-white"
          href={href}
        >
          {children}
        </a>
      ) : (
        <button>{children}</button>
      )}
    </>
  );
};
