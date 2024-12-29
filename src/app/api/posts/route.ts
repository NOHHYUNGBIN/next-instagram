import { createPost, getFollowingPostsOf } from "@/service/post";
import { checkAuthUser } from "@/util/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return checkAuthUser(async (user) => {
    return getFollowingPostsOf(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}
export async function POST(req: NextRequest) {
  return checkAuthUser(async (user) => {
    const form = await req.formData();
    const text = form.get("text")?.toString();
    const file = form.get("file") as Blob;
    if (!text || !file) {
      return new Response("Bad Request", { status: 400 });
    }
    return createPost(user.id, text, file).then((data) =>
      NextResponse.json(data)
    );
  });
}
