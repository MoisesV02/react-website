import React from 'react'
import '../../App.css'
import './Contact.css'

// had to get image of the color grey because if i try to add it manually, the website breaks...
const image = new URL("../../images/Grey.png", import.meta.url)

export default function Contact() {
    return (
        <div className='background2' style={{ backgroundImage: `url(${image})`}}>
            <section className='section2'>
                <div className='container2'>
                    <div className='row2'>
                        <div>
                            <h1 className='invisible-text'>test</h1>
                            <div className='separation'></div>
                            <h2 className='subheaders2'>Need Help?</h2>
                            <div className='space3'></div>
                            <p className='paragraph2'>You can contact RetroGames by calling/texting 777-777-7777 if you have a technical issue, we are happy to help with your technical issue. If you have any games recommendations or any ideas that you want to see added to RetroGames in the future you can send a email at RetroGames@gmail.com, we are avaliable Monday-Friday from 6:00AM-2:25PM.</p>
                            <h1 className='invisible-text2'>a</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}