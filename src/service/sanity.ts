import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_SECRET_TOKEN, // 읽기만 한다면 필요없지만 쓰기를 한다면 토큰이 필요하다.
  useCdn: false, // 동적인 데이터가 주로 들어있으니 Cdn에 캐쉬하지않음.
  apiVersion: "2024-11-10",
  fetch: {
    cache: "no-store",
  },
});
const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}
export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.SANITY_DATASET}`;
