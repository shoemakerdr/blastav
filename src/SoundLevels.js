import React, { Component } from 'react';
import './SoundLevels.css';

class SoundLevels extends Component {
    constructor () {
        super()
        this.gridSize = 9 * 4
    }
    render() {
        return (
            <div className='sound-levels-container'>
                {[...Array(this.gridSize).keys()].map(i => 
                    <span key={`red${i}`} className={`red c${i % 12} r${Math.floor(i / 12)}`}></span>
                )}
                {[...Array(this.gridSize).keys()].map(i =>
                    <span key={`yellow${i}`} className={`yellow c${i % 12} r${Math.floor(i / 12) + 3}`}></span>
                )}
                {[...Array(this.gridSize).keys()].map(i =>
                    <span key={`green${i}`} className={`green c${i % 12} r${Math.floor(i / 12) + 6}`}></span>
                )}
            </div>
        )
    }
}

export default SoundLevels;
