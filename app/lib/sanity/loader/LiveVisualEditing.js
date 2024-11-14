'use client'

import { useLiveMode } from '@sanity/react-loader'
import { enableVisualEditing } from '@sanity/visual-editing'
import { useEffect } from 'react'
import { client } from '@/lib/sanity/lib/client'

// Always enable stega in Live Mode
const stegaClient = client.withConfig({ 
  stega: true,
  // Use the client token here
  token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN
})

export default function LiveVisualEditing() {
  useLiveMode({ client: stegaClient })

  useEffect(() => {
    // Enable visual editing on mount
    enableVisualEditing()

    // If not an iframe or a Vercel Preview deployment, turn off Draft Mode
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent) {
      location.href = '/api/disable-draft'
    }
  }, [])

  // No need to return the VisualEditing component
  return null
}
