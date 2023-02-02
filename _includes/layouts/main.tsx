import { PageData } from "lume/core.ts"

export default (data : PageData) => {
	return (
		<html class="">
			<head>
				<title>{data.title}</title>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link href="./styles.css" rel="stylesheet"/>
			</head>
			<body class="bg-darkgreen font-code text-white">
				{data.children}
			</body>
		</html>
	)
}