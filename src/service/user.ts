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
