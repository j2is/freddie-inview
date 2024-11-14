'server-only';

import * as queryStore from '@sanity/react-loader';
import { draftMode } from 'next/headers';
import { client } from '@/lib/sanity/lib/client';
import { token } from '@/lib/sanity/lib/token';

import {
	homeQuery,
	pageQuery,
} from '@/lib/sanity/lib/queries';

const serverClient = client.withConfig({
	token,
	// Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
	stega: process.env.VERCEL_ENV === 'preview',
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;
// Automatically handle draft mode
export const loadQuery = async (query, params = {}, options = {}) => {
	const draftModeStatus = await draftMode();
	const {
		perspective = draftModeStatus.isEnabled ? 'previewDrafts' : 'published',
	} = options;
	// Don't cache by default
	let revalidate = 0;
	// uncomment these to cache	
	// If `next.tags` is set, and we're not using the CDN, then it's safe to cache
	// if dev
	const isDev = process.env.NODE_ENV === 'development';
	if (!isDev && !usingCdn && Array.isArray(options.next?.tags)) {
		revalidate = false;
	} else if (!isDev && usingCdn) {
		revalidate = 60;
	}
	return queryStore.loadQuery(query, params, {
		...options,
		next: {
			revalidate,
			...(options.next || {}),
		},
		perspective,
		// Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
		stega: draftModeStatus.isEnabled,
	});
};

export async function loadPage({ query, slug, tags }) {
	if (!query) {
		console.warn(`No query found for slug: ${slug}`);
		return null;
	}

	return await loadQuery(
		query,
		{ slug },
		{ next: { tags } }
	);
}

export function getQueryAndTags({ pageType }) {

	const queries = {
		home: homeQuery,
		page: pageQuery,
	};

	const tagList = {
		page: ['page'],
		home: ['home'],
		// editorial: ['editorial', 'contact', 'settings'], // multiple tags to break cache on multiple pages
	}

	const query = queries[pageType] || undefined;
	const tags = tagList[pageType] || undefined;

	return { query, tags };
}
