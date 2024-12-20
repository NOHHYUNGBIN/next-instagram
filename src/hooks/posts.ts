import { SimplePost } from "@/model/post";
import useSWR from "swr";
import { useSWRConfig } from "swr";
export default function usePosts() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  const { mutate } = useSWRConfig();
  const setLike = (post: SimplePost, usename: string, like: boolean) => {
    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id: post.id, like }),
    }).then(() => mutate("/api/posts"));
    // 캐시 업데이트
  };
  return { posts, isLoading, error, setLike };
}
