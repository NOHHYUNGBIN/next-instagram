"use client";

import { HomeUser } from "@/model/user";
import Link from "next/link";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import { GridSpinner2 } from "./ui/GridSpinner";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<HomeUser>("/api/me");
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <GridSpinner2 size={8} color="pink" />
      ) : (
        !users || (users.length === 0 && <p>팔로우 한 사람이 없습니다.</p>)
      )}
      {users && users.length > 0 && (
        // <ul>
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar size="large" image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
        // </ul>
      )}
    </section>
  );
}
