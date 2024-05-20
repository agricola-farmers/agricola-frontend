import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SocketContext } from '@/context/socket';

export default function Play() {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { roomNumber, nicknames } = router.query;

  useEffect(() => {
    if (roomNumber && nicknames) {
      const playerNicknames = nicknames.split(',');
      console.log(`Room Number: ${roomNumber}`);
      console.log('Player Nicknames:', playerNicknames);
      
      // Here you can send the playerNicknames to the server or handle them as needed
    }
  }, [roomNumber, nicknames]);

  return (
    <div>
      <h1>Play Room: {roomNumber}</h1>
      <p>Players: {nicknames}</p>
      <button onClick={() => socket.emit('dataFromClient', 'Hello, world!')}>
        Send data to server
      </button>
    </div>
  );
}
