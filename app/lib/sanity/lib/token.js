import 'server-only'

import { experimental_taintUniqueValue } from 'react'
import { headers } from 'next/headers'

export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
	throw new Error('Missing SANITY_API_READ_TOKEN')
}

export function getTaintedToken() {
  try {
    const headersList = headers()
    const host = headersList.get('host')

		console.log(host);
    
    // Only taint the token when not accessing from studio
    if (!host?.includes(':3333')) {
      experimental_taintUniqueValue(
        'Do not pass the sanity API read token to the client.',
        process,
        token,
      )
    }
    return token
  } catch {
    // If headers() fails (e.g., during build time), return untainted token
    return token
  }
}