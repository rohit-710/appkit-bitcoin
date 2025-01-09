import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { bitcoin, bitcoinTestnet } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const bitcoinAdapter = new BitcoinAdapter({
  networks: [bitcoin, bitcoinTestnet],
  projectId
})
