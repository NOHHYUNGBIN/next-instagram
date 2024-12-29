import { disLikePost, likePost } from "@/service/post";
import { checkAuthUser } from "@/util/session";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  return checkAuthUser(async (user) => {
    const { id, like } = await req.json();
    if (!id || like === undefined) {
      return new Response("Bad Request", { status: 400 });
    }
    const request = like ? likePost : disLikePost;
    return request(id, user.id)
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
