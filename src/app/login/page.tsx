"use client"

import { authClient } from "@/src/lib/auth/client"
import { Icon } from "@iconify/react"
import { redirect } from "next/navigation"

export default function Login() {
	const { data } = authClient.useSession()

	if (data?.session) {
		redirect("/")
	}

	return (
		<div className="m-8 flex h-screen flex-col items-center">
			<div className="popover flex flex-col items-center justify-center">
				<h1 className="p-4">Sign In</h1>
				<p className="text-muted-foreground">Sign in with your Google or GitHub account</p>

				<hr className="my-8 w-full" />

				<div className="flex flex-col items-center justify-center gap-4">
					<button
						onClick={async () => {
							await authClient.signIn.social({ provider: "google", callbackURL: "/" })
						}}
						className="btn bg-[#db4437] text-white"
					>
						<Icon icon="simple-icons:google" width={25} height={25} />
						Sign In With Google
					</button>
					<button
						onClick={async () => {
							await authClient.signIn.social({ provider: "github", callbackURL: "/" })
						}}
						className="btn bg-[#333333] text-white"
					>
						<Icon icon="simple-icons:github" width={25} height={25} />
						Sign In With GitHub
					</button>
				</div>
			</div>
		</div>
	)
}
