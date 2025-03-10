import Providers from "@/src/components/context/Providers"
import Footer from "@/src/components/Footer"
import Navbar from "@/src/components/Navbar"
import { authOptions } from "@/src/lib/auth"
import "@/src/styles/globals.css"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js Boilerplate website."
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	const session = await getServerSession(authOptions)

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers session={session}>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
