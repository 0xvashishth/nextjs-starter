import '../styles/globals.css';
import { WagmiConfig } from 'wagmi';
import { client } from '../utils/wagmi';
import { ConnectKitProvider } from 'connectkit';

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
