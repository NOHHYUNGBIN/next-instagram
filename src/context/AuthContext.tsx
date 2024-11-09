"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};
//SessionProvider를 씌워줄(감싸줄) 컴퍼넌트들을 처리
export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
