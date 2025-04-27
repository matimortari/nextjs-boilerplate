import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions, SessionStrategy } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/src/lib/db"

export const authOptions: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID ?? "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
		})
	],
	adapter: PrismaAdapter(db),
	session: {
		strategy: "database" as SessionStrategy
	},
	callbacks: {}
}
