"use client"

import { Icon } from "@iconify/react"
import { createAuthClient } from "better-auth/react"
import Link from "next/link"

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

const { useSession } = createAuthClient()

export default function Home() {
	const { data } = useSession()

	return (
		<div className="relative m-8 min-h-screen overflow-x-hidden">
			<header className="card flex w-full items-center justify-between">
				<div className="flex flex-row items-center space-x-6">
					<h2 className="font-bold">Hello World!</h2>
					<p className="text-sm font-normal text-muted-foreground">
						Welcome {data?.user?.name}! This is a demo of my{" "}
						<Link href="https://github.com/matimortari/nextjs-boilerplate" className="font-bold">
							Next.js boilerplate
						</Link>{" "}
						for building a full-stack web application.
					</p>
				</div>
			</header>

			<hr className="my-8 w-full" />

			<main className="container mx-auto flex flex-col items-center justify-center">
				<h3 className="mb-4 font-bold">Features</h3>

				<ul className="mx-12 grid grid-cols-1 gap-4 md:grid-cols-3">
					{features.map((feature) => (
						<li key={feature.id} className="popover p-4">
							<div className="flex flex-row items-center gap-2">
								<span className="rounded-full bg-muted p-2">
									{feature.icon && <Icon icon={feature.icon} width={25} height={25} className="text-white" />}
								</span>
								<h6>{feature.name}</h6>
							</div>
							<hr className="my-2 w-6/12 border-dashed" />
							<p className="text-sm">{feature.description}</p>
						</li>
					))}
				</ul>
			</main>

			<hr className="my-8 w-full" />
		</div>
	)
}
