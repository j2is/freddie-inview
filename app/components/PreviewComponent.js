'use client'

import { useQuery } from '@/lib/sanity/loader/useQuery'
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('@/components/Home'));
const Page = dynamic(() => import('@/components/Page'));
import Link from 'next/link';

export default function PreviewComponent({ query, initial, pageType }) {
	const blankInitial = { data: {} };
	const { data, encodeDataAttribute } = useQuery(query, {}, { initial: initial ? initial : blankInitial });

	if (!data) {
		return (
			<div className="text-center">
				Please start editing your document to see the preview!
			</div>
		)
	}

	switch (pageType) {
		case 'page':
			return <Page {...data} encodeDataAttribute={encodeDataAttribute} />
		case 'home':
			return <Home {...data} encodeDataAttribute={encodeDataAttribute} />
		default:
			return <div>404</div>
	}
}