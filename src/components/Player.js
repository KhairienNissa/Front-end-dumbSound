import React from "react";
import FakeLove from '../assets/FAKE-LOVE.mp3';
import BTS1 from '../assets/fakelove.jpg'
import 'react-h5-audio-player/lib/styles.css'
import { Navbar } from "react-bootstrap";
import AudioPlayer from 'react-h5-audio-player'

const path = "http://localhost:5000/uploads/"

const Player = ({playMusic}) => {
    return (
        <div>
            <Navbar className="fixed-bottom navplay d-flex">
                    <div style={{paddingRight:"100px"}} className="d-flex w-50 justify-content-center me-5">
                            <img src={path + playMusic.thumbnail} width="50px" height="50px" alt="artis" className="image-music rounded-circle"/>
                            <p className="text-white mt-3 ms-3">{playMusic.artis.name} - {playMusic.title}</p>
                    </div>
                    <AudioPlayer
                    src={path + playMusic.attache}
                    showFilledVolume={true}/>
            </Navbar>



        </div>
    )
}

export default Player