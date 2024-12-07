import { SearchUser } from "@/model/user";
import { client } from "./sanity";

type OauthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ id, username, email, name, image }: OauthUser) {
  // sanity에서 제공해주는 함수.
  // 사용자가 이미 있다면 추가하지 않고, 없다면 추가함.
  // schemaTypes 에 미리 정의해놓은 user 정보와 일치하도록 데이터 전송
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    name,
    email,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  const query = `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
    }`;
  return client.fetch(query, {}, { cache: "no-store" });
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& ((name match "${keyword}") || (name match "${keyword}"))`
    : "";
  return client
    .fetch(
      `*[_type =="user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers)
    }
    `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}
export async function getUserForProfile(username: string) {
  return client
    .fetch(
      `*[_type=="user" && username=="${username}"][0] {
      ...,
      "id":_id,
      "following": count(following),
      "followers": count(followers),
      "posts": count(*[_type=="post" && author->username == "${username}"])
    }`
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      followers: user.followers ?? 0,
      post: user.posts ?? 0,
    }));
}
