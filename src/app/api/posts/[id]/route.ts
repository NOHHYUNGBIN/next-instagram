import { getPost } from "@/service/post";
import { checkAuthUser } from "@/util/session";
import { NextRequest, NextResponse } from "next/server";
type Context = {
  params: { id: string };
};
export async function GET(_: NextRequest, context: Context) {
  return checkAuthUser(async () => {
    return getPost(context.params.id).then((data) => NextResponse.json(data));
  });
}
