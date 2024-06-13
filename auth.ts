import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import connectDB from "./config/database";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
      await connectDB();
      // 2. Check if user already exists
      const userExists = await User.findOne({ email: profile?.email });
      // 3. If not, create a new user in database
      if (!userExists) {
        // Truncate username if too long
        const username = profile?.name?.slice(0, 20);

        await User.create({
          email: profile?.email,
          username,
          image: profile?.picture,
        });
      }
      // 4. Return true to allow signin
      return true;
    },
    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session?.user?.email });
      // 2. Assign the user id to the session
      session.user.id = user?._id.toString();
      // 3. return session
      return session;
    },
  },
  ...authConfig,
});
