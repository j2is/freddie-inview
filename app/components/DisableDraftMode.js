'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'
import Link from 'next/link';

export function DisableDraftMode() {
	const environment = useDraftModeEnvironment()

	// Only show the disable draft mode button when outside of Presentation Tool
	if (environment !== 'live' && environment !== 'unknown') {
		return null
	}

	return (
		<Link
			href="/api/draft-mode/disable"
			style={{ position: 'fixed', bottom: '4px', right: '4px', zIndex: 1000, padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}
		>
			Disable Draft Mode
		</Link>
	)
}