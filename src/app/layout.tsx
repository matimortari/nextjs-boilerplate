import Footer from "@/src/components/Footer"
import Navbar from "@/src/components/Navbar"
import Providers from "@/src/components/context/Providers"
import "@/src/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js Boilerplate website."
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
