import React, { Component } from 'react';
import logo from './blastav-logo.svg';
import rocket from './blastav-rocket.png';
import patSoundBoard from './pat-sound-board.jpg'
import './App.css';
// import SoundLevels from './SoundLevels'

class App extends Component {
  render() {
    console.log(CSS.supports('display', 'grid'))
    return (
        <div className='App'>
            <nav id='home'>
                <a href='#home'>HOME</a>
                <a href='#about'>ABOUT</a>
                <a href='#contact'>CONTACT</a>
            </nav>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
            <div className='logo-wrapper'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <main>
                <section className='quote'>
                    <img src={patSoundBoard} className='pat-sound-board-img' alt='Pat at sound board' />
                    <h1>The Musician's Engineer</h1>
                </section>
                <figure>
                <div className='rocket-wrapper'>
                    <img src={rocket} className='rocket' alt='rocket' />
                </div>
                </figure>
                <section id='about' className='about'>
                    <h1>ABOUT</h1>
                    <h2>
                        Jacksonville, FL freelance sound engineer and production tech. Professional work 
                        experience ranging from churches, conferences, big name acts, local/regional artists, 
                        festivals, weddings, and private events. Email for booking availability.
                    </h2>
                </section>
                <figure>
                <div className='rocket-wrapper'>
                    <img src={rocket} className='rocket' alt='rocket' />
                </div>
                </figure>
                <section id='contact' className='contact'>
                    <h1>CONTACT</h1>
                    <h2>Patrick Shoemaker</h2>
                    <h2>(904) 728-5905</h2>
                    <h2><a href='mailto:pat@blastav.com'>pat@blastav.com</a></h2>
                </section>
            </main>
            <footer>Designed/developed by<span>&nbsp;</span><a href='https://derekshoemaker.com'>Derek Shoemaker</a></footer>
        </div>
    );
  }
}

export default App;
