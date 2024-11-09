import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//google oauth processing..
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
};
export default NextAuth(authOptions);
