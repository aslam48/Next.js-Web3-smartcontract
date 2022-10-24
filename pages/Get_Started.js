import React, { useState,useEffect } from 'react'
import Web3Modal from "web3modal";
import {ethers} from "ethers"
import Image from "next/image"


import creator from '../nft.jpg'
import imageEth from '../eth.png'


const Get_Started = () => {
    const [currentAccount, setCurrentAccount] = useState(" ")
    const [connect, setConnect] = useState(false)
    const [balance , setBalance] = useState("")

    const failMessage = "Please Install MetaMask & connet your  MetaMask wallet"
    const successMessage = "Your account Successfully connected to your MetaMask wallet"

    const INFURA_ID = "5990dd797939443c8127293dbecd2d98";
    const provider = new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${INFURA_ID}`
    );

    const checkifWalletConneted = async ()=> {
        if (!window.ethereum) return;

        const accounts = await window.ethereum.request({method: "eth_accounts"})
    

        if(accounts.length){
            setCurrentAccount(accounts[0])
        }else{
            console.log("fail");
        }

        const address = '0x1337c0de7360c041FC72B08b97DE0D88475A1c5B';
        const balance = await provider.getBalance(address);
        const showBalance = `${ethers.utils.formatEther(balance)} ETH\n`
        // console.log(showBalance);
        setBalance(showBalance)
    };

    const CWallet = async() =>{
        if(!window.ethereum) return console.log(failMessage)

        const  accounts = await window.ethereum.request({method: "eth_requestAccounts"})

        setCurrentAccount(accounts[0])

        window.location.reload()
    };

    useEffect(() => {
        checkifWalletConneted();
    });

    useEffect(() =>{
        async function accountChanged(){
            window.ethereum.on("accountChanged", async function(){
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
            })
    
            

            if(accounts.length){
                setCurrentAccount(accounts[0])
            }else{
                window.location.reload()
            }
        })
        }
       accountChanged()
    },[])

  return (
    <div clasName="card-container"> 
        {!currentAccount ?  " " : <span className='pro'>PRO</span>}
        <Image src={creator} alt='profile' width={80} height={80}/>
        <h3>Check Ether</h3>

        {! currentAccount ? (
            <div>
                <div className='message'> 
                <p>{failMessage}</p>
                </div>
                <Image src={imageEth} alt='' width={100} height={100}/>
                <p>Welcome to ether account balance checker</p>
            </div>
        ) : (
            <div>
                <h6>Verified <span className='tick'>&#10004;</span></h6>
                <p>Ether account and balance Checker <br/> find account details</p>
                <div className='buttons'>
                    <button className='primary gost' onClick={() => {}}> 
                    Ether Account Details
                    </button>
                </div>
            </div>
        ) }

        {! currentAccount && !connect ? (
            <div className='buttons'>
                <button className='primary' onClick={() => CWallet()}> Connet Wallet</button>
            </div>
        ) : ( 
            <div className='skills'>
                <h6>Your Ether</h6>
                <ul>
                    <li>Account</li>
                    <li>{currentAccount}</li>
                    <li>Balance</li>
                    <li>{balance}</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Get_Started