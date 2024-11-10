import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//google oauth processing..
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      console.debug("idididid", id);
      console.debug("namenamenamename", name);
      console.debug("imageimageimageimage", image);
      console.debug("emailemailemailemail", email);
      if (!email) return false;
      addUser({
        id,
        name: name || "",
        image,
        email,
        username: email?.split("@")[0],
      });
      return true;
    },
    async session({ session }) {
      console.debug("sessionsessionsession", session);
      const user = session?.user;
      if (!!user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
