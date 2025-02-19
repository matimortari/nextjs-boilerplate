import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="m-8 flex flex-row items-center justify-between gap-4">
			<div className="text-muted-foreground">
				<p>{new Date().getFullYear()} © Matheus Mortari. All rights reserved.</p>
			</div>

			<div className="flex flex-row gap-4 text-muted-foreground">
				<Link href="https://github.com/matimortari" target="_blank" rel="noopener noreferrer">
					<Icon icon="simple-icons:github" width={25} height={25} />
				</Link>
				<Link href="https://www.linkedin.com/in/matheus-mortari-19rt" target="_blank" rel="noopener noreferrer">
					<Icon icon="simple-icons:linkedin" width={25} height={25} />
				</Link>
			</div>
		</footer>
	)
}
