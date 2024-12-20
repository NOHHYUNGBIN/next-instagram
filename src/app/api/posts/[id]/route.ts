import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getFollowingPostsOf, getPost } from "@/service/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
type Context = {
  params: { id: string };
};
export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response("사용자 정보가 없습니다.", { status: 401 });
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
