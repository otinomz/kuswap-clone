import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../leftpane/LeftPane.scss'
import logo from '../../assets/logo.png'
import { BsListNested } from "react-icons/bs";
import {RiHome3Fill} from  "react-icons/ri";
import {RiExchangeLine} from   "react-icons/ri";
import { RiRocketLine } from "react-icons/ri";
import { TiChartBarOutline } from "react-icons/ti";
import { RiWaterFlashFill } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { BiMedal } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import {GiCloudRing} from "react-icons/gi";
import { RiSwapLine } from "react-icons/ri";
import { SiRtlzwei } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import SubMenu from './SubMenu'


const items = [
    {
        name: "Home",
        to: '/',
        iconItem: `${<RiHome3Fill />}`
    },
    {
        name: "Exchange",
        to: '/exchange',
        iconItem: `${ <RiExchangeLine/>}`
    },
    {
        name: "Liquidity",
        to: '/liquidity',
        iconItem: `${<RiWaterFlashFill/>}`
    },
    {
        name: "Charts",
        to: '/charts',
        iconItem: `${<SiRtlzwei/>}`
    },
    {
        name: "Farms",
        to: '/farms',
        iconItem: `${<BiLineChart />}`
    },
    {
        name: "Pools",
        to: '/pools',
        iconItem: `${<GiCloudRing/>}`
    },
    {
        name: "Trading Battle",
        to: '/trading',
        iconItem: `${<IoTrophyOutline />}`
    },
    {
        name: "Launchpad",
        to: '/launchpad',
        iconItem: `${<RiRocketLine />}`
    },
    {
        name: "Lottery",
        to: '/lottery',
        iconItem: `${<AiOutlineGift/>}`
    },
    {
        name: "Kudrops",
        to: '/ku',
        iconItem: `${<BiMedal />}`
    },
    {
        name: "Analytics",
        to: '/analytics',
        iconItem: `${<TiChartBarOutline />}`
    },
    {
        name: "Governance",
        to: '/governance',
        iconItem: `${<AiOutlineBank />}`
    },
    {
        name: "Bridge",
        to: '/bridge',
        iconItem: `${<FaRegHandshake />}`
    },

    {
        name: "More",
        to: '/',
        subMenus: [
            { name: 'Contact' },
            { name: 'GitHub' },
            { name: 'Docs' },
            {name: 'Blog'}
        ]
    },
    

]

const LeftPane = (props) => {
    const [isShown, setIsShown] = useState(false)
    
    const { isActive, toggleActive } = props;

    return (
        <div className={`left-pane ${isActive ? "": "inactive" }`} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >

            <div className='top-section'>
                <div className="logo">
                    <img src={logo} alt=''/> <h1 className='off'>KuSwap</h1>
                </div>

                <div className="toggle-icon">
                
                {/* {isShown && ( */}
                    {/* <button onClick={() => props.changeState()}> */}
                    { isShown && (
                        <button onClick={() => {
                            toggleActive()
                            console.log(isActive);
                        }}>
                            <BsListNested />
                        </button>
                    )}
                  {/* )}   */}
                </div>
            </div>
            
  

            <div className="items" >
                <ul className='list'>
                    <li >
                        <NavLink to='/' exact activeClassName='selected' >
                        <div className='icon'>
                            <RiHome3Fill/>
                        </div>
                            <span className='text'>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/exchange' activeClassName='selected' >
                        <div className='icon'>
                            <RiExchangeLine/>
                        </div>
                            <span className='text'>Exchange</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/liquidity' exact activeClassName='selected' >
                        <div className='icon'>
                                <RiWaterFlashFill/>
                            </div>

                            <span className='text'>Liquidity</span>
                        </NavLink>
                    </li>
                   <li>
                        <NavLink to='/charts' exact activeClassName='selected' >
                        <div className='icon'>
                                <SiRtlzwei/>
                            </div>
                        <span className='text'>Charts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/farms' exact activeClassName='selected'>
                        <div className='icon'>
                                <BiLineChart/>
                            </div>
                        <span className='text'>Farms</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pools' exact activeClassName='selected' >
                        <div className='icon'>
                                <GiCloudRing/>
                            </div>
                        <span className='text'>Pools</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/trading' exact activeClassName='selected'>
                        <div className='icon'>
                                <IoTrophyOutline/>
                            </div>
                        <span className="text">TradingBattle</span>
                        </NavLink>
                    </li>

                    <li>
                       <NavLink to='/launchpad' exact activeClassName='selected' >
                        <div className='icon'>
                               <RiRocketLine/>
                            </div>
                            <span className='text'>Launchpad</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/lottery' exact activeClassName='selected' >
                         <div className='icon'>
                                <AiOutlineGift/>
                            </div>
                        <span className='text'>Lottery</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/ku' exact activeClassName='selected'>
                         <div className='icon'>
                                <BiMedal/>
                            </div>
                        <span className='text'>Kudrops</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/analytics' exact activeClassName='selected' >
                        </NavLink>
                        <div className='icon'>
                                <TiChartBarOutline/>
                            </div>
                        <span className='text'>Analytics</span> 
                    </li>
                    <li>
                        <NavLink to='/governance' exact activeClassName='selected' >
                        <div className='icon'>
                                <AiOutlineBank/>
                            </div>
                            <span className='text'>Governance</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/bridge' exact activeClassName='selected' >
                        <div className='icon'>
                                <FaRegHandshake/>
                            </div>
                             <span className='text'>Bridge</span>
                        </NavLink>
                    </li>
                    <SubMenu
                        name={'More'}
                        subMenus={[
                            { name: 'Contact' },
                            { name: 'GitHub' },
                            { name: 'Docs' },
                            { name: 'Blog' }
                            
                        ]}
                        // onClick = {change}
                    />
                </ul>
            </div>

                
                <button className="account">
                    <div className="photo">
                        <h3>HOT KuSwap Trades</h3>
                    </div>
                
                    <div className='tokens'>
                        <div className="name">
                            <RiSwapLine/>
                        </div>
                        <div className="username">
                            Swap
                           <span> 3:00Pm </span>
                        </div>
                        <div className="moneySide">
                            USDT/WKCS
                            <span className='money'>$309.63 </span>
                        </div>
                    </div>
                       
                    <div className='tokens'>
                        <div className="name">
                            <RiSwapLine/>
                        </div>
                        <div className="username">
                            Swap
                           <span> 3:00Pm </span>
                        </div>
                        <div className="moneySide">
                            USDT/WKCS
                            <span className='money'>$309.63 </span>
                        </div>
                    </div>
               </button>
           
            
        </div>
    )
}

export default LeftPane