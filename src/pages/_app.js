import { SocketContext, socket } from '@/context/socket';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />;
    </SocketContext.Provider>
  );
}
