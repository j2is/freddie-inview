import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

const Home = dynamic(() => import('@/components/Home'))

export default async function PageRoute({ params }) {
	return <Home />
}
