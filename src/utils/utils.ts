export function LoadEnv(env_name: string): string {
	let ENV: string = ""

	try {
		const temp = process.env[env_name]
		temp === undefined ? (ENV = "") : (ENV = temp)
	} catch(error: unknown) {
		console.log(`Couldn't get MONGODB_URI due to: ${error}`)
	}

	return ENV
}