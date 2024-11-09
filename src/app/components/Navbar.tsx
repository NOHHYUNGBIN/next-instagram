"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SeachIcon from "./ui/icons/SeachIcon";
import SeachFillIcon from "./ui/icons/SeachFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
export default function Navbar() {
  const menu = [
    {
      href: "/",
      icon: <HomeIcon />,
      clickedIcon: <HomeFillIcon />,
    },
    {
      href: "/search",
      icon: <SeachIcon />,
      clickedIcon: <SeachFillIcon />,
    },
    {
      href: "/new",
      icon: <NewIcon />,
      clickedIcon: <NewFillIcon />,
    },
  ];
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">beengram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
