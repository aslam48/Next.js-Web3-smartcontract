import dynamic from 'next/dynamic';
import So from '../styles/Solana.module.css'
import Image from "next/image"



import Phantom from '../phantom.jpg'

const WalletDisconnectButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);


export default function Home() {
  return (
    <div className={So.body}> 
            <div className={So.card}>
            <Image src={Phantom} className={So.phantom_pic} alt='' width={60} height={60}/>
            <p className={So.p}>phantom A friendly crypto wallet  </p>
                    <WalletMultiButtonDynamic/>
                    <WalletDisconnectButtonDynamic  className={So.shift}/>
                </div>
      
    </div>
  )
}
