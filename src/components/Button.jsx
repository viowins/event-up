export default function Button({ children, href }) {
  const classes = "py-[10px] px-6 text-md";
  return (
    <>
      {href ? (
        <a className={`${classes && classes}`} href={href}>
          {children}
        </a>
      ) : (
        <button className={`${classes && classes}`}>{children}</button>
      )}
    </>
  );
}

Button.Primary = function ({ children, href }) {
  const classes =
    "flex items-center gap-2 py-[10px] px-6 rounded-lg bg-primary-800 text-white text-md";
  return (
    <>
      {href ? (
        <a className={`${classes && classes}`} href={href}>
          {children}
        </a>
      ) : (
        <button className={`${classes && classes}`}>{children}</button>
      )}
    </>
  );
};
