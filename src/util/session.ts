import { AuthUser } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function checkAuthUser(
  callback: (user: AuthUser) => Promise<Response>
): Promise<Response> {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response("사용자 정보가 없습니다.", { status: 401 });
  }
  return callback(user);
}
