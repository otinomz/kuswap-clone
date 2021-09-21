import React, {useState} from 'react'
import { ImTelegram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaMedium } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import './pages/modal/WalletModal.scss'

// import {TiTimes} from  "react-icons/ti";
// import {RiQuestionFill} from  "react-icons/ri";
import WalletModal from './pages/modal/WalletModal';

function Nav() {
    const [isActive, setIsActive] = useState(false)

    const cancel = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <nav >
                <div className="logo">
                    <span className="social-icon"><ImTelegram/></span>
                    <span className="social-icon"><ImTwitter/></span>
                    <span className="social-icon"><FaMedium/></span>
                    <span className="social-icon"><FaFacebook/></span>

                </div>

                <button onClick={cancel}>
                    <span className='wallet'><BiWallet/></span> <span>Connect wallet</span>
                </button>


            </nav>
            
            <WalletModal isActive={isActive} cancel={cancel}/>     
        </>
    )
}

export default Nav
