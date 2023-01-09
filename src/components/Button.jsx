export default function Button({ children, href, className }) {
  const classes = "py-[10px] px-6 text-md";
  className ? (className += ` ${classes}`) : (className = classes);
  return (
    <>
      {href ? (
        <a className={`${className && className}`} href={href}>
          {children}
        </a>
      ) : (
        <button className={`${className && className}`}>{children}</button>
      )}
    </>
  );
}

Button.Primary = function ({ children, href, className }) {
  const classes =
    "flex items-center gap-2 py-4 px-6 rounded-lg bg-primary-800 text-white text-lg transition-all duration-200 hover:bg-primary-600";
  className ? (className += ` ${classes}`) : (className = classes);
  return (
    <>
      {href ? (
        <a className={`${className && className}`} href={href}>
          {children}
        </a>
      ) : (
        <button className={`${className && className}`}>{children}</button>
      )}
    </>
  );
};

Button.OutlineWhite = function ({ children, href, className }) {
  const classes =
    "group flex items-center gap-2 py-4 px-6 rounded-lg bg-transparent text-white text-lg border border-white transition-all duration-200 hover:bg-white hover:text-neutral-800";
  className ? (className += ` ${classes}`) : (className = classes);
  return (
    <>
      {href ? (
        <a className={`${className && className}`} href={href}>
          {children}
        </a>
      ) : (
        <button className={`${className && className}`}>{children}</button>
      )}
    </>
  );
};
