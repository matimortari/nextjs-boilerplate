"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const getMessage = async () => {
	const response = await fetch("/api/hello")
	if (!response.ok) throw new Error("Failed to fetch data")
	return response.json()
}

export default function Home() {
	const { data, refetch } = useQuery({
		queryKey: ["get-message"],
		queryFn: getMessage,
		enabled: false
	})

	return (
		<div className="relative m-4 min-h-screen">
			<header className="card container mx-auto flex w-full items-center justify-between">
				<div className="container mx-auto flex items-center justify-between">
					<h1 className="text-2xl font-semibold">Hello World!</h1>

					<div className="flex flex-row gap-2">
						<div className="size-10 rounded-lg bg-chart-1" />
						<div className="size-10 rounded-lg bg-chart-2" />
						<div className="size-10 rounded-lg bg-chart-3" />
						<div className="size-10 rounded-lg bg-chart-4" />
						<div className="size-10 rounded-lg bg-chart-5" />
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
					for building a full-stack web application using Next.js, TypeScript, Tailwind CSS, and more. It includes:
				</p>

				<ul className="mt-4 list-inside list-disc text-base font-normal text-muted-foreground">
					<li>
						<strong>Next.js</strong> with App Router.
					</li>
					<li>
						<strong>TypeScript</strong>.
					</li>
					<li>
						<strong>Tailwind CSS</strong>.
					</li>
					<li>
						<strong>React Query</strong> integration for data fetching.
					</li>
					<li>
						<strong>NextAuth.js</strong> for authentication, with Google & GitHub providers.
					</li>
					<li>
						<strong>Prisma</strong> ORM for database management.
					</li>
					<li>
						<strong>Vitest</strong> for unit & integration testing.
					</li>
					<li>
						<strong>Playwright</strong> for end-to-end testing.
					</li>
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
