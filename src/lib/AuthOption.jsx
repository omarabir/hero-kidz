import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { loginUsers } from "@/actions/server/auth";
import { collections, dbConnect } from "./database";

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

  callbacks: {
    async signIn({ user, account, profile }) {
      // Only create user for OAuth providers (Google, Facebook, etc.)
      // Skip for credentials provider as user is already created during registration
      if (account.provider === "credentials") {
        return true;
      }

      // For OAuth providers, check if user exists
      const existingUser = await dbConnect(collections.USERS).findOne({
        email: user.email,
      });

      if (existingUser) {
        console.log("OAuth user already exists:", user.email);

        return true;
      }

      // Create new OAuth user
      const newUser = {
        provider: account.provider,
        email: user.email,
        image: user.image,
        name: user.name,
        role: "user",
        createdAt: new Date(),
      };

      const result = await dbConnect(collections.USERS).insertOne(newUser);
      console.log("New OAuth user created:", user.email);
      return result.acknowledged;
    },
    async jwt({ token, user, account }) {
      // If user just signed in (OAuth or credentials)
      if (user) {
        token.email = user.email;
        // For OAuth, fetch user from DB to get role
        if (account && account.provider !== "credentials") {
          const dbUser = await dbConnect(collections.USERS).findOne({
            email: user.email,
          });
          token.role = dbUser?.role;
        } else {
          token.role = user.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // session.user = session.user || {};
        session.user.email = token.email;
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
