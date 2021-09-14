import React from 'react'
import { ImTelegram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaMedium } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {BiWallet} from "react-icons/bi";

function Nav() {
    return (
        <nav >
            <div className="logo">
                <span className="social-icon"><ImTelegram/></span>
                <span className="social-icon"><ImTwitter/></span>
                <span className="social-icon"><FaMedium/></span>
                <span className="social-icon"><FaFacebook/></span>

            </div>

            <button>
                <span className='wallet'><BiWallet/></span> <span>Connect wallet</span>
            </button>

            

        </nav>
    )
}

export default Nav
