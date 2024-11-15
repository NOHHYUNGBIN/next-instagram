"use client";

import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR("/api/hello");
  console.debug("data", data);
  return <p>FollowingBar</p>;
}
