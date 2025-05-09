import { AuthUser } from "@/model/user";

declare module "next-auth" {
  //Session 의 user객체안에는 username 타입은 없으므로 재선언.
  interface Session {
    user: AuthUser;
  }
}
