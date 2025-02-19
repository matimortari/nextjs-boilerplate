"use client"

import { Icon } from "@iconify/react"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Login() {
	const { status } = useSession()

	if (status === "authenticated") {
		redirect("/")
	}

	return (
		<div className="m-8 flex h-screen flex-col items-center">
			<div className="popover flex flex-col items-center justify-center">
				<h1 className="p-4">Sign In</h1>
				<p className="text-muted-foreground">Sign in with your Google or GitHub account</p>

				<hr className="my-8 w-full" />

				<div className="flex flex-col items-center justify-center gap-4">
					<button onClick={() => signIn("google")} className="btn bg-[#db4437] text-white">
						<Icon icon="simple-icons:google" width={25} height={25} />
						Sign In With Google
					</button>
					<button onClick={() => signIn("github")} className="btn bg-[#333333] text-white">
						<Icon icon="simple-icons:github" width={25} height={25} />
						Sign In With GitHub
					</button>
				</div>
			</div>
		</div>
	)
}
