"use client";
import PostListCard from "./PostListCard";
import { GridSpinner } from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();
  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
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
