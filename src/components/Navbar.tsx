"use client"

import { Icon } from "@iconify/react"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [userMenuOpen, setUserMenuOpen] = useState(false)
	const { data: session } = useSession()
	const { theme, setTheme } = useTheme()

	const handleThemeToggle = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" }
	]

	return (
		<nav className="border-b shadow-lg">
			<div className="mx-auto flex h-16 flex-row items-center justify-between px-4">
				<div className="flex flex-row items-center space-x-2">
					<Image src="/logo.png" alt="Logo" width={30} height={30} />
					<Link href="/" className="whitespace-nowrap text-lg font-bold">
						Next.js Boilerplate
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden space-x-4 md:flex md:flex-row md:items-center">
					{navLinks.map((link) => (
						<Link key={link.label} href={link.href} className="btn">
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex flex-row items-center space-x-2">
					<button onClick={handleThemeToggle} className="btn size-8">
						<Icon
							icon={theme === "light" ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
						/>
					</button>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="btn size-8">
							<Icon icon="bi:menu-button-wide" />
						</button>
					</div>

					{session && session.user.name && session.user.image ? (
						<div className="flex flex-row items-center space-x-2">
							<div className="relative">
								<Image
									src={session.user.image}
									alt={session.user.name}
									width={35}
									height={35}
									className="cursor-pointer rounded-full"
									onClick={() => setUserMenuOpen(!userMenuOpen)}
								/>

								{/* User Dropdown Menu */}
								{userMenuOpen && (
									<div className="popover absolute right-0 z-10 mt-2 w-28">
										<div className="flex flex-col space-y-2 text-start text-sm font-medium">
											<Link href="/profile" className="btn block hover:bg-muted">
												Profile
											</Link>
											<Link href="/settings" className="btn block hover:bg-muted">
												Settings
											</Link>
											<button onClick={() => signOut()} className="btn block text-start hover:bg-muted">
												Sign Out
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					) : (
						<Link href="/login" className="rounded-full">
							<Icon icon="bi:person-circle" className="size-8 text-muted-foreground" />
						</Link>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
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
