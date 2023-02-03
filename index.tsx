import type {PageData} from "lume/core.ts"


export const title = "bitch"
export const layout = "layouts/main.tsx"

export default (data : PageData) => (
	<>
		<div class="text-center my-8">
      		<div class="text-center">{data.title}</div>
    	</div>
	</>
)