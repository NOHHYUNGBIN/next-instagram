"use client";
import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("/api/post");
  console.debug("posts", posts);
  return (
    <section>
      {loading && (
        <div>
          <GridSpinner color="pink" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, idx) => (
            <li key={post.id}>
              <PostListCard post={post} priority={idx < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
