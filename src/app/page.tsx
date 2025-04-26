"use client"

import { Icon } from "@iconify/react"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	const { theme, setTheme } = useTheme()

	const { data: session } = useSession()

	const features = [
		{
			name: "Modern React Stack",
			description:
				"Explore the modern React ecosystem: Next.js, React Query, Zustand for state management, and form handling with React Hook Form and Zod.",
			icon: "mdi:console"
		},
		{
			name: "Backend & Database",
			description:
				"Use Next.js API routes for the backend and Prisma for database management. Authentication with Auth.js, already integrated with Google + GitHub.",
			icon: "mdi:database-cog"
		},
		{
			name: "Quick CSS & Styling",
			description:
				"Create beautiful, responsive designs effortlessly with Tailwind CSS (integrated with ESLint). Polished global styles and theme toggling included.",
			icon: "mdi:palette-advanced"
		},
		{
			name: "Code Quality & Testing",
			description:
				"Unit and integration tests with Vitest + React Testing Library, end-to-end testing with Playwright. Maintain high code quality with TypeScript and ESLint.",
			icon: "mdi:bug-check-outline"
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
				{session?.user?.image ? (
					<div className="flex flex-row items-center gap-2">
						<Image
							src={session.user.image}
							alt={session.user.name || "User"}
							className="rounded-full"
							width={25}
							height={25}
						/>
						<p className="text-sm font-medium text-muted-foreground">{`Logged in as ${session.user.name}`}</p>
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

					{session?.user ? (
						<button
							onClick={() => signOut()}
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

			<section id="features" className="grid grid-cols-1 gap-4 md:mx-8 md:grid-cols-2">
				{features.map((feature) => (
					<div key={feature.name} className="card">
						<div className="mb-4 flex flex-row items-center gap-2 p-2">
							<span className="rounded-full bg-muted bg-gradient-to-tr from-primary to-secondary p-2">
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
