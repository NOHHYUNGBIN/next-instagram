"use client";
import Link from "next/link";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import { GridSpinner2 } from "./ui/GridSpinner";
import useMe from "@/hooks/me";

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;
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
