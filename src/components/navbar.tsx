"use client"

import { authClient } from "@/src/lib/auth/client"
import { Icon } from "@iconify/react"
import { createAuthClient } from "better-auth/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const { useSession } = createAuthClient()

export default function Navbar() {
	const { data } = useSession()

	const { theme, setTheme } = useTheme()
	const userMenuRef = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)
	const [userMenuOpen, setUserMenuOpen] = useState(false)

	const handleThemeToggle = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const navLinks = [
		{ href: "/", label: "About" },
		{ href: "https://github.com/matimortari/nextjs-boilerplate", label: "Source" }
	]

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
				setUserMenuOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<nav className="border-b shadow-lg">
			<div className="mx-4 flex h-16 flex-row items-center justify-between">
				<div className="flex flex-row items-center gap-2">
					<Link href="/">
						<Image src="/logo.png" alt="Logo" width={30} height={30} />
					</Link>

					<div className="hidden flex-row items-center gap-2 md:flex">
						{navLinks.map((link) => (
							<Link key={link.label} href={link.href} className="btn bg-card">
								{link.label}
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-row items-center gap-2">
					<button onClick={handleThemeToggle} className="btn size-8 bg-card">
						<Icon
							icon={theme === "light" ? "material-symbols:dark-mode-rounded" : "material-symbols:light-mode-rounded"}
						/>
					</button>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="btn size-8 bg-card">
							<Icon icon="bi:menu-button-wide" width={25} height={25} />
						</button>
					</div>

					{data?.user ? (
						<div className="flex flex-row items-center gap-2">
							<div className="relative">
								<Image
									src={data.user.image || "/default-profile.png"}
									alt={data.user.name}
									width={35}
									height={35}
									className="cursor-pointer rounded-full"
									onClick={() => setUserMenuOpen(!userMenuOpen)}
								/>

								{/* User dropdown menu */}
								{userMenuOpen && (
									<div ref={userMenuRef} className="popover absolute right-0 z-10 mt-2 w-28">
										<div className="flex flex-col gap-2 text-start text-sm font-medium">
											<Link href="/profile" className="btn block bg-card hover:bg-muted">
												Profile
											</Link>
											<Link href="/settings" className="btn block bg-card hover:bg-muted">
												Settings
											</Link>
											<button
												onClick={async () => {
													await authClient.signOut()
													location.reload()
												}}
												className="btn block bg-card text-start hover:bg-muted"
											>
												Sign Out
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					) : (
						<Link href="/login" className="rounded-full">
							<Icon icon="bi:person-circle" width={25} height={25} className="text-muted-foreground" />
						</Link>
					)}
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="space-y-2 border-t p-4 shadow-md">
						{navLinks.map((link) => (
							<Link key={link.label} href={link.href} className="block transition duration-150 hover:text-primary">
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}
