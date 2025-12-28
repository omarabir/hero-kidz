import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { loginUsers } from "@/actions/server/auth";

export const AuthOption = {
  secret:
    process.env.NEXTAUTH_SECRET || "your-secret-key-change-this-in-production",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "email" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUsers(credentials);

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allow callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allow callback URLs from the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
