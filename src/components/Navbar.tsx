"use client"

import { Icon } from "@iconify/react"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
	const { data: session } = useSession()
	const { theme, setTheme } = useTheme()

	const handleThemeToggle = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<nav className="flex items-center justify-between p-2 shadow-md">
			<div className="flex items-center gap-2">
				<Link className="btn" href="/">
					Home
				</Link>
			</div>

			<div className="flex items-center gap-2">
				<button onClick={handleThemeToggle} className="btn size-8">
					<Icon
						icon={theme === "light" ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
					/>
				</button>

				{session ? (
					<div className="flex items-center gap-2">
						<button onClick={() => signOut()} className="btn">
							Sign Out
						</button>
						{session.user.image && (
							<Image
								src={session.user.image}
								alt={session.user.name || ""}
								width={40}
								height={40}
								className="rounded-full"
							/>
						)}
					</div>
				) : (
					<Link href="/login" className="btn">
						Sign In
					</Link>
				)}
			</div>
		</nav>
	)
}
