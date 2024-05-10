import { SocketContext } from '@/context/socket';
import { useContext } from 'react';

export default function play() {
  const socket = useContext(SocketContext);

  return (
    <button onClick={() => socket.emit('dataFromClient', 'Hello, world!')}>
      Send data to server
    </button>
  );
}
