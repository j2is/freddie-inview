import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

const Page = dynamic(() => import('@/components/Page'))
const Home = dynamic(() => import('@/components/Home'))
const PreviewComponent = dynamic(() => import('@/components/PreviewComponent'))

import { loadPage, getQueryAndTags } from '@/lib/sanity/loader/loadQuery'

export default async function PageRoute({ params }) {
	// Create the draft mode promise
	const { isEnabled } = await draftMode()

	// Handle params
	const { slug = [] } = await params;
	const fullSlug = slug?.join("/");

	// Determine page type
	const isHome = slug?.length === 0
	const pageType = isHome ? 'home' : 'page'

	try {
		// Get the query and tags for the page
		const { query, tags } = getQueryAndTags({ pageType, slug: fullSlug })

		// Fetch data
		const initial = await loadPage({ query, slug: fullSlug, tags })


		if (isEnabled) {
			return <PreviewComponent query={query} initial={initial} pageType={pageType} />
		}

		// Return the appropriate component based on page type
		if (pageType === 'home') {
			return <Home {...initial?.data} />
		}

		if (pageType === 'page' && initial?.data) {
			return <Page {...initial?.data} />
		}



		return <div>404 - Page not found</div>
	} catch (error) {
		console.error('Error loading page:', error)
		return <div>Error loading page</div>
	}
}
