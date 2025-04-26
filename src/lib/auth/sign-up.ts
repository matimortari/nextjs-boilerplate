import { authClient } from "@/src/lib/auth/client"

const email = "user@example.com" // replace with actual email
const password = "password123" // replace with actual password
const name = "John Doe" // replace with actual name
const image = "https://example.com/image.jpg" // replace with actual image URL

const { data, error } = await authClient.signUp.email(
	{
		email, // user email address
		password, // user password -> min 8 characters by default
		name, // user display name
		image, // user image url (optional)
		callbackURL: "/dashboard"
		/**
		 * remember the user session after the browser is closed.
		 * @default true
		 */
	},
	{
		onRequest: (ctx) => {
			//show loading
		},
		onSuccess: (ctx) => {
			//redirect to the dashboard or sign in page
		},
		onError: (ctx) => {
			// display the error message
			alert(ctx.error.message)
		}
	}
)

await authClient.signIn.social({
	/**
	 * The social provider id
	 * @example "github", "google", "apple"
	 */
	provider: "github",
	/**
	 * a url to redirect after the user authenticates with the provider
	 * @default "/"
	 */
	callbackURL: "/dashboard",
	/**
	 * a url to redirect if an error occurs during the sign in process
	 */
	errorCallbackURL: "/error",
	/**
	 * a url to redirect if the user is newly registered
	 */
	newUserCallbackURL: "/welcome",
	/**
	 * disable the automatic redirect to the provider.
	 * @default false
	 */
	disableRedirect: true
})
