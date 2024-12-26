import useSWR from "swr";
import { GridSpinner } from "./ui/GridSpinner";
import { SimplePost } from "@/model/post";
import PostGridCard from "./PostGridCard";
import usePosts from "@/hooks/posts";

type Props = {
  username: string;
  query: string;
};
export default function PostGrid({ username, query }: Props) {
  const { posts, isLoading } = usePosts(`/api/users/${username}/${query}`);

  return (
    <div className="w-full text-center">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, idx) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={idx < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
