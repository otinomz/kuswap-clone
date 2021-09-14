import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './Home.scss'
import bk from '../../assets/bk.png'
import logo from '../../assets/logo.png'
import Board from '../../assets/board.png'
import Farm from '../../assets/farm.png'
import {RiBitCoinLine} from "react-icons/ri";


function Home() {
    return (
        <>
            <Nav/>
            <div className='content-container'>
                <div className="content">
                    <h1>The #1 AMM & Yield Farming on KCC network </h1>
                    <p> KuCoin Community Chain's most powerful DEX,
                        join KUS Ecosystem, lowest fees with ever increasing utility!
                    </p>
                </div>
                
                <div className="image">
                    <img src={bk} alt="" />
                </div>
            </div>


            <div className='card'>
            
                <div className="items">
                    <h1>11m</h1>
                    <p>KuSwap Total Value Locked</p>
                </div>

                <div className="items">
                    <h1>1.2m+</h1>
                    <p>KuSwap Total Trades</p>
                </div>
                <div className="items">
                    <h1>1m</h1>
                    <p>KuSwap Volume for last 24h</p>
                </div>

            </div>

            <div className='content-containers'>
                <div className="contents">
                    <h1>Earn in KusPool</h1>
                    <p> Stake & earn. </p>
                    <p>Stable with low risk. </p>

                    <div className="button">
                      <RiBitCoinLine/> <span>Start earning crypto</span>
                    </div>
                </div>
                
                <div className="images">
                    <div className="items">
                        <img src={logo} alt="" />
                        <div>
                        <h3>Earn KUS</h3>
                        <p>Stake KUS</p>
                        <h2>APR -</h2></div>
                    </div>
                        <span>Active</span>
                </div>
            </div>

            
            <div className='new'>
                <div className="content">
                    <h1>KUS Stats</h1>
                    <ul>
                        <li>KUS Circulating Supply: <span className="colon">2.2M</span> </li>
                        <li>Total Burned KUS: <span className="colon">339K</span> </li>
                        <li>Total KUS Supply: <span className="colon">6.9M</span> </li>
                        <li>KUS Marketcap: <span className="colon">6M</span> </li>
                        <li>KUS/Block: <span className="colon">1</span> </li>
                    </ul>
                </div>
                
                <div className="images">
                    <img className='board' src={Board} alt="" />
                </div>
            </div>

            <div className='new2'>
                <div className="images">
                    <img className='board' src={Farm} alt="" />
                </div>

                <div className="content">
                    <h1>Yield Farms</h1>
                    <h5> Earn upto 1000% + APR </h5>
                    
                    <div className="button">
                      <span>All Farms</span>
                    </div>

                    <p>Profitable Yield Farming on KCC,</p>
                    <p>stable long term growth only on KuSwap.</p>                    
                </div>
                
            </div>
            
            {/* <div className="slide">

                <div className="slide-1"></div>
                <div className="slide-1"></div>
                <div className="slide-1"></div>
                <div className="slide-1"></div>


            </div> */}

            <Footer/>
        
            
        </>
    )
}

export default Home
