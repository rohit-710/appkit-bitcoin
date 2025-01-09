'use client'

import { projectId, bitcoinAdapter } from '@/config'
import { createAppKit } from '@reown/appkit/react' 
import { bitcoin, bitcoinTestnet } from '@reown/appkit/networks'

import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = { //this is optional
  name: "appkit-example",
  description: "AppKit Example - Bitcoin",
  url: "https://reown-appkit-bitcoin.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"]
}

// Create the modal
const modal = createAppKit({
  adapters: [bitcoinAdapter].filter(Boolean),
  chainImages: { // Customize networks' logos
    '000000000019d6689c085ae165831e93': '/Bitcoin.png',
  },
  projectId,
  networks: [bitcoin, bitcoinTestnet],
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeMode: 'light'
})

function ContextProvider({ children }: { children: ReactNode}) {
  return (
    <>{children}</>
  )
}

export default ContextProvider