import { getUserByUsername } from "@/service/user";
import { checkAuthUser } from "@/util/session";
import { NextResponse } from "next/server";

export async function GET() {
  return checkAuthUser(async (user) => {
    return getUserByUsername(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}
