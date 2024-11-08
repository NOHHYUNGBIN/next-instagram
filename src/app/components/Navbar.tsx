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
    <div>
      <Link href="/">
        <h1>Nohhbgram</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
