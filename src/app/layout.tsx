import Providers from "@/src/components/context/providers"
import Footer from "@/src/components/footer"
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
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
