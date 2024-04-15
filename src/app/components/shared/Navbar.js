"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  { Route: "Home", Path: "/" },
  { Route: "About", Path: "about" },
  { Route: "Services", Path: "services" },
  { Route: "Portfolio", Path: "portfolio" },
  { Route: "Blog", Path: "blog" },
  { Route: "Contact", Path: "contact" },
];

const Navbar = () => {
  const pathname = usePathname().slice(1);
  const [isSticky, setIsSticky] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 8;
      if (!isTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar bg-base-100 sticky top-0 transition duration-500 ease ${
        isSticky
          ? "backdrop-blur-lg bg-white/10 pt-2"
          : "shadow-none bg-transparent pt-4"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full 
            "
          >
            {routes.map((route, index) => (
              <li key={index} className="opacity-75 hover:opacity-100">
                <Link href={route.Path}>{route.Route}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl hidden lg:flex hover:bg-transparent"
        >
          Mind Matrix It
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((route, index) => (
              <li key={index}>
                {/* {console.log(pathname)} */}
                <Link
                  href={route.Path}
                  className={`opacity-75 rounded-none hover:opacity-100 hover:bg-transparent border-b-2 border-solid ${
                    pathname === route.Path ||
                    (pathname === "" && route.Path === "/")
                      ? "opacity-100 border-primary bg-transparent"
                      : " border-transparent"
                  }`}
                >
                  {route.Route}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="secondary-btn">
            Get in touch
          </Link>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl flex lg:hidden hover:bg-transparent"
        >
          Mind Matrix It
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
