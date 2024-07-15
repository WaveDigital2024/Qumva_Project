import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet , polygon  , bsc , bscTestnet } from 'wagmi/chains'

import PropTypes from 'prop-types';

// 0. Setup queryClient


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '4c76df2170d9355796df40891b49ff5d';

// 2. Create wagmiConfig
const metadata = {
  name: 'Qumva',
  description: 'Qumva',
  url: 'https://qumva.com/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum, polygon, bsc, bscTestnet];

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // Optional - Override createConfig parameters
});

// 3. Create modal
createWeb3Modal({
  themeVariables: {
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#F5841F'
  },
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

export default function ProviderWeb3Model({ children }) {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  );
}

ProviderWeb3Model.propTypes = {
  children: PropTypes.node
};