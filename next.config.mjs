/** @type {import('next').NextConfig} */
const nextConfig = {
	"images": {
		"remotePatterns": [
			{ "hostname": "cdn.sanity.io" }
		]
	},
	"compiler": {
		"styledComponents": true
	},
	"typescript": {
		"ignoreBuildErrors": process.env.VERCEL_ENV === 'production'
	},
	"eslint": {
		"ignoreDuringBuilds": process.env.VERCEL_ENV === 'production'
	},
	"logging": {
		"fetches": {
			"fullUrl": true
		}
	},
	"experimental": {
		"taint": true
	},
	"env": {
		"thumbSize": "1500",
		"desktopSize": "2800"
	}
};

export default nextConfig;
