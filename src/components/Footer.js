import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <footer>

            <div className="image">
                <img src={logo} alt="" />

                <div className="content">
                    <h4>KUS Price</h4>
                    <p className='price'> $2.594</p>
                </div>
            </div>

            
            <div className="image">
                <img src={logo} alt="" />

                <div className="content">
                    <p> Add KUS to Metamask</p>
                </div>
            </div>

            
            <div className="image.">
                <p>KUS per Block: 1KUS</p>
                <p>KSU Burned: 338,503 KUS</p>
            </div>

            
            <div className="image">
                <div className="content">
                    <p>Next Burn</p>
                    <p>End of Month</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer
