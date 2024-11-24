import { FullPost, SimplePost } from "@/model/post";
import useSWR from "swr";

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  console.debug("ididid", id);
  console.debug("post", post);
  const { data } = useSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments;
  console.debug(data);
  console.debug(data);
  return <></>;
}
