import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import "@/components/Styles/FontFace.css"
import StyledComponentsRegistry from '../lib/registry'
import { Providers } from '../lib/providers'
import GlobalStyles from '../components/Styles/GlobalStyles'
import { DisableDraftMode } from '@/components/DisableDraftMode'
import { VisualEditing } from 'next-sanity'
import { SanityLive } from '@/lib/sanity/lib/live'

export default async function Index({
	children,
}) {
	const { isEnabled } = await draftMode();


	return (
		<html lang="en">
			<body>
				<Providers>
					<StyledComponentsRegistry>
						<GlobalStyles />
						{children}
						<SanityLive />
						{isEnabled && (
							<>
								<DisableDraftMode />
								<VisualEditing />
							</>
						)}
					</StyledComponentsRegistry>
				</Providers>
			</body>
		</html>
	)
}