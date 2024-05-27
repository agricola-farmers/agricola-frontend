import { SocketContext, socket } from '@/context/socket';
import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SocketContext.Provider value={socket}>
        <Component {...pageProps} />;
      </SocketContext.Provider>
    </RecoilRoot>
  );
}
