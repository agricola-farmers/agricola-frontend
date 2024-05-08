import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import background from '/public/images/background.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Image src={background} alt="background" fill />
    </div>
  );
}
