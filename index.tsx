import type {PageData} from "lume/core.ts"


export const title = "Welcome to the site!"
export const layout = "layouts/main.tsx"

export default (data : PageData) => (
	<>
		<h1>{data.title}</h1>
		<p>sup</p>
	</>
)