"use client";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};
//SessionProvider를 씌워줄(감싸줄) 컴퍼넌트들을 처리
export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
