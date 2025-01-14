"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const getMessage = async () => {
	const response = await fetch("/api/hello")
	if (!response.ok) throw new Error("Failed to fetch data")
	return response.json()
}

const technologies = [
	{ name: "Next.js", description: "with App Router" },
	{ name: "TypeScript", description: "" },
	{ name: "Tailwind CSS", description: "" },
	{ name: "Zustand", description: "support for global state management" },
	{ name: "React Hook Form", description: "support for form management" },
	{ name: "Zod", description: "support for form validation" },
	{ name: "React Query", description: "support for data fetching" },
	{ name: "NextAuth.js", description: "for authentication, with Google & GitHub providers" },
	{ name: "Prisma", description: "ORM for database management" },
	{ name: "Vitest", description: "for unit & integration testing" },
	{ name: "Playwright", description: "for end-to-end testing" }
]

export default function Home() {
	const { data, refetch } = useQuery({
		queryKey: ["get-message"],
		queryFn: getMessage,
		enabled: false
	})

	return (
		<div className="relative m-4 min-h-screen overflow-x-hidden">
			<header className="card container mx-auto flex w-full items-center justify-between">
				<div className="container mx-auto flex items-center justify-between">
					<h1 className="font-semibold">Hello World!</h1>

					<div className="flex flex-row gap-8 overflow-x-auto">
						<div className="flex flex-row gap-2">
							<div className="size-10 rounded-lg bg-primary" />
							<div className="size-10 rounded-lg bg-secondary" />
							<div className="size-10 rounded-lg bg-accent" />
							<div className="size-10 rounded-lg bg-muted" />
							<div className="size-10 rounded-lg bg-danger" />
							<div className="size-10 rounded-lg bg-success" />
						</div>
						<div className="flex flex-row gap-2">
							<div className="size-10 rounded-lg bg-chart-1" />
							<div className="size-10 rounded-lg bg-chart-2" />
							<div className="size-10 rounded-lg bg-chart-3" />
							<div className="size-10 rounded-lg bg-chart-4" />
							<div className="size-10 rounded-lg bg-chart-5" />
						</div>
					</div>
				</div>
			</header>
			<hr className="my-6 w-full" />
			<main className="container mx-auto my-4 flex flex-col items-start justify-center">
				<p className="text-base font-normal text-muted-foreground">
					This is a demo of my{" "}
					<Link href="https://github.com/matimortari/nextjs-boilerplate" className="font-semibold text-foreground">
						Next.js boilerplate{" "}
					</Link>
					for building a full-stack web application. It includes:
				</p>

				<ul className="mt-4 list-inside list-disc text-base font-normal text-muted-foreground">
					{technologies.map((tech, index) => (
						<li key={index}>
							<strong>{tech.name}</strong> {tech.description}
						</li>
					))}
				</ul>

				<div className="relative mt-4 flex w-full flex-row items-center gap-4">
					<button className="btn" onClick={() => refetch()}>
						Test Data Fetching
					</button>
					<button className="btn" onClick={undefined}>
						Get Session Data
					</button>

					{data?.message && (
						<div className="popover absolute bottom-0 right-0">
							<strong>{data.message}</strong>
						</div>
					)}
				</div>
			</main>
		</div>
	)
}
