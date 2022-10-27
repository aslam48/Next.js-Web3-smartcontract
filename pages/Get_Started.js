import React, { useState,useEffect } from 'react'
// import Web3Modal from "web3modal";
// import {ethers} from "ethers"
// import Image from "next/image"
import Solana from './solana'
import MetaMask from './MataMask'
import Base from '../styles/Base.module.css'


// import creator from '../nft.jpg'
// import imageEth from '../eth.png'


const Get_Started = () => {
  

  return (
    <div  className={Base.base}>
   <Solana/>
   <MetaMask/>
    </div>
  )
}

export default Get_Started