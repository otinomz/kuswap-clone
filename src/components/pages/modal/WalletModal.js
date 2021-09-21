import React, {useState, useEffect, useRef} from 'react'
import {TiTimes} from  "react-icons/ti";
import {RiQuestionFill} from  "react-icons/ri";
import './WalletModal.scss'

function WalletModal(props) {
    const { isActive, cancel } = props

    // const [isClick, setIsclick] = useState('you clicked me')

    const click = () => {
        alert('you clicked me again')
    }
 
    return (

        <section className={`modal ${isActive ? "active" : ''}`} onClick= {cancel}>
            <div className= 'btn-modal'  onClick= { e => e.stopPropagation()}>
                <div className='title'>
                    <h2>Connect your wallet</h2>  <span onClick={cancel}><TiTimes/></span>
                </div>
                    
                    
                <div className='btn'>
                    <button className='modal-btn diff' onClick={click}>
                        Metamask <span><img src="" alt="wolf image" /></span>
                    </button>

                    <button className='modal-btn'>
                        TokenPocket   <span><img src="" alt="wolf image" /></span>
                    </button>
                    <button className='modal-btn'>
                        WalletConnect  <span><img src="" alt="wolf image" /></span>
                    </button>

                    <button className='modal-btn'>
                        Add KCC Network 
                    </button>
                    <div className="bottom">
                        <span><RiQuestionFill /></span> Learn how to connect
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WalletModal
