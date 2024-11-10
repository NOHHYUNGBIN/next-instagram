import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // 동적인 데이터가 주로 들어있으니 Cdn에 캐쉬하지않음.
  apiVersion: "2024-11-10",
  token: process.env.SANITY_SECRET_TOKEN, // 읽기만 한다면 필요없지만 쓰기를 한다면 토큰이 필요하다.
});
