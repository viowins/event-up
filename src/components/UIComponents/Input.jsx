export default function Input({ type, placeholder }) {
  return (
    <>
      <input type={type} placeholder={placeholder} />
    </>
  );
}

Input.Email = function ({ placeholder, buttonType, value, onChange }) {
  return (
    <label className="flex items-center gap-2 w-full p-4 border border-neutral-50 rounded-lg">
      <input
        value={value}
        onChange={onChange}
        className="w-full outline-none text-neutral-500 placeholder:text-neutral-50"
        type="email"
        placeholder={placeholder}
      />
      {buttonType && (
        <button className="text-neutral-800 shrink-0" type={buttonType}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0248 4.94141L17.0831 9.99974L12.0248 15.0581"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91663 10H16.9416"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </label>
  );
};
