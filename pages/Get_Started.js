import React, { useState,useEffect } from 'react'
import Web3Modal from "web3modal";
import {ethers} from "ethers"
import Image from "next/image"
import Get from '../styles/Get_started.module.css'
import Solana from './solana'
import MetaMask from './MataMask'


import creator from '../nft.jpg'
import imageEth from '../eth.png'


const Get_Started = () => {
  

  return (
    <div className={Get.body}>
  

{/* solana */}
   <Solana/>
   <MetaMask/>
    </div>
  )
}

export default Get_Started