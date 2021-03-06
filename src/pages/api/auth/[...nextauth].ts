import NextAuth from "next-auth";
import { session, signIn } from "next-auth/client";
import Providers from "next-auth/providers";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async session(session, profile) {
      try {
        return {
          ...session,
          id: profile.sub,
        };
      } catch (error) {
        return {
          ...session,
          id: null,
        };
      }
    },
    async signIn(user, account, profile) {
      const { email } = user;
      try {
        return true;
      } catch (error) {
        console.log("Deu erro:", error);
        return false;
      }
    },
  },
});
