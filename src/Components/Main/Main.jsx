// import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Qazi.</span></p>
                    <p>How Can I Assist You today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Write a story in my favorite genere</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Help me with code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Explain reprodective system</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Write a story on pakistan</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>

                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a Prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon}alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses.With ❤️ by Qaxi Hashim Ali</p>

                </div>
            </div>

        </div>
    )
}

export default Main