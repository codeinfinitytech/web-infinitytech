"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navBarLinks } from "@/constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOPen] = useState(false);
  let menuRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handler, true);
  }, []);
  const handler = (e) => {
    if (!menuRef.current?.contains(e.target)) {
      setIsOPen(false);
    } else {
      console.log("clicked inside");
    }
  };

  const pathname = usePathname();
  return (
    <div className=" max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
      <Link href="/">
        <Image src={`/image/logo.png`} alt="" width={200} height={100} />
      </Link>
      <div className="links hidden md:flex text-white  text-[16px] gap-10 font-light items-center font-outfit">
        {navBarLinks.map((item) => {
          const linkActive =
            pathname === item.route || pathname.startsWith(item.route);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={clsx(`group hover:text-[#F59620] `, {
                "text-[#F59620]": linkActive,
              })}
            >
              {item.label}
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          );
        })}

        <Link
          href="#contactus"
          className=" px-10 py-[10px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620]"
        >
          Reach us
        </Link>
      </div>

      <div className="flex md:hidden" onClick={() => setIsOPen(!isOpen)}>
        <VscThreeBars color="white" size={40} />
      </div>

      {isOpen ? (
        <div
          ref={menuRef}
          className={
            "absolute z-20 flex md:hidden  px-10 py-10  bg-[#56697A] right-0 top-20 rounded-l-lg "
          }
          onClick={() => setIsOPen(true)}
        >
          <div className="flex text-white flex-col gap-4  text-[18px]">
            {navBarLinks.map((item) => {
              const linkActive =
                pathname === item.route || pathname.startsWith(item.route);
              return (
                <Link
                  href={item.route}
                  key={item.label}
                  className={clsx(`hover:text-[#F59620] `, {
                    "text-[#F59620]": linkActive,
                  })}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="py-2 px-10 bg-[#F59620] rounded-md mt-4">
              Reach as
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
