"use client"

import { authClient } from "@/src/lib/auth/client"
import { Icon } from "@iconify/react"
import { createAuthClient } from "better-auth/react"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

const { useSession } = createAuthClient()

export default function Home() {
	const { theme, setTheme } = useTheme()

	const { data } = useSession()

	const features = [
		{
			id: 1,
			name: "Free & Open Source",
			description:
				"This boilerplate is totally free to use and open source. Feel free to contribute to the project and help me improve it!",
			icon: "mdi:code"
		},
		{
			id: 2,
			name: "Modern React Stack",
			description:
				"Explore a modern React ecosystem: Next.js, React Query, Zustand for state management, and form handling with React Hook Form & Zod.",
			icon: "mdi:console"
		},
		{
			id: 3,
			name: "API & Database",
			description:
				"Manage your database using Prisma, and take advantage of Next.js API routes. Also comes with Auth.js for authentication with Google & GitHub.",
			icon: "mdi:database-cog"
		},
		{
			id: 4,
			name: "Rapid Styling",
			description:
				"Use Tailwind CSS (integrated with ESLint) and PostCSS for easy and fast CSS styling. Also comes with a bunch of global styles and a theme switcher.",
			icon: "mdi:palette-advanced"
		},
		{
			id: 5,
			name: "Code Quality",
			description:
				"Maintain high-quality code with TypeScript for static typing and ESLint for linting, ensuring clean, error-free development.",
			icon: "mdi:bug-check-outline"
		},
		{
			id: 6,
			name: "Testing Suite",
			description:
				"Test your application with Vitest, along with React Testing Library for unit & integration testing, and Playwright for end-to-end testing.",
			icon: "mdi:test-tube"
		}
	]

	const handleThemeToggle = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<div className="m-20 flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
			<main className="flex flex-col items-center justify-center gap-6">
				<h1 className="text-4xl font-bold">Hello World!</h1>
				<p className="text-center text-muted-foreground">
					This is a demo of my full-stack <span className="font-semibold">Next.js boilerplate.</span>
				</p>
				{data?.user ? (
					<div className="flex flex-row items-center gap-2">
						<Image
							src={data.user.image || "/avatar.png"}
							alt={data.user.name || "User"}
							className="rounded-full"
							width={25}
							height={25}
						/>
						<p className="text-sm font-medium text-muted-foreground">{`Logged in as ${data.user.name}`}</p>
					</div>
				) : null}

				<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
					<Link
						href="https://github.com/matimortari/nextjs-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-sm font-medium hover:text-primary"
					>
						<Icon icon="mdi:star-outline" width={20} height={20} />
						<span>Source</span>
					</Link>

					<Link
						href="https://nextjs.org/docs"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-sm font-medium hover:text-primary"
					>
						<Icon icon="mdi:book-open-page-variant" width={20} height={20} />
						<span>Next.js Docs</span>
					</Link>

					<button
						onClick={handleThemeToggle}
						className="flex items-center gap-2 text-sm font-medium hover:text-primary"
					>
						<Icon
							icon={theme === "light" ? "material-symbols:dark-mode-outline" : "material-symbols:light-mode-outline"}
							width={20}
							height={20}
						/>
						<span>Toggle Theme</span>
					</button>

					{data?.user ? (
						<button
							onClick={async () => {
								await authClient.signOut()
								location.reload()
							}}
							className="flex items-center gap-2 text-sm font-medium hover:text-primary"
						>
							<Icon icon="mdi:logout-variant" width={20} height={20} />
							<span>Sign out</span>
						</button>
					) : (
						<Link href="/login" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
							<Icon icon="mdi:login-variant" width={20} height={20} />
							<span>Sign in</span>
						</Link>
					)}
				</div>
			</main>

			<hr className="my-12 w-full" />

			<h3 className="mb-8">Features</h3>

			<section id="features" className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{features.map((feature) => (
					<div key={feature.id} className="card">
						<div className="mb-4 flex flex-row items-center gap-2 p-2">
							<span className="rounded-full bg-muted bg-gradient-to-tr from-primary to-secondary p-2 ">
								<Icon icon={feature.icon} width={20} height={20} className="text-[#ebe8e8]" />
							</span>
							<h5>{feature.name}</h5>
						</div>
						<p className="text-sm text-muted-foreground">{feature.description}</p>
					</div>
				))}
			</section>

			<hr className="mt-12 w-full" />
		</div>
	)
}
