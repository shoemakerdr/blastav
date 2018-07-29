import React, { Component } from 'react';
import logo from './blastav-logo.svg';
import patSoundBoard from './pat-sound-board.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <nav id='home'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
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
                    <h1>"The Musician's Engineer"</h1>
                </section>
                <section id='about' className='about'>
                    <h1>About</h1>
                    <h2>Pat is a sound engineer living in Jacksonville, FL.</h2>
                </section>
                <section id='contact' className='contact'>
                    <h1>Contact</h1>
                    <h2><a href='mailto:pat@blastav.com'>pat@blastav.com</a></h2>
                </section>
            </main>
            <footer>Designed/developed by<span>&nbsp;</span><a href='https://derekshoemaker.com'>Derek Shoemaker</a></footer>
        </div>
    );
  }
}

export default App;
