import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  //Session 의 user객체안에는 username 타입은 없으므로 재정의.
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}
