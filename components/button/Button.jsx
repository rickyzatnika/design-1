import Link from "next/link";

const Button = ({ children }) => {
  return (
    <>
      <button className="relative z-20 cursor-pointer group group-hover mt-5 px-4 lg:px-6 py-2 hover:shadow-md group-hover:shadow-md shadow-black/80 lg:py-2 bg-green-900 bg-opacity-40 rounded-xl text-gray-100  hover:text-white transition-all duration-300 ease-linear">
        <span className="relative z-20"> {children}</span>
        <div className="absolute -z-10 bg-green-900/90 w-3 bottom-0 left-0 h-full rounded-none hover:shadow-md shadow-black/80  group-hover:shadow-md hover:rounded-xl group-hover:rounded-xl  group hover:w-full group-hover:w-full transition-all duration-300 ease-in-out" />
      </button>
    </>
  );
};

export default Button;
