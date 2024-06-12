import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if user already exists
      // 3. If not, create a new user in database
      // 4. Return true to allow signin
      return !!profile;
    },
    async session({ session }) {
      // 1. Get user from database
      // 2. Assign the user id to the session
      // 3. return session
      // console.log({ session });
      // return session;
      return session;
    },
  },
  ...authConfig,
});
