import React from 'react';
import CountComp from './Countdown';
import './ZoomImage.css';
import { babyLinks } from '../util/baby-links';

function ZoomImage() {
    const tam = babyLinks.links.length-1;
    const sorteio = Math.floor(Math.random() * tam);
    return (
        <div id="container-zoom">
            <a 
                href="https://www.facebook.com/groups/ElzeroWebSchool/" 
                target="_blank">
                <img 
                    src={babyLinks.links[sorteio]} 
                    alt="Omar">
                </img> 
            </a>
            <div className="box-text">
                <center><h1>Esta chegando a</h1></center>
                <h2><center>Hora de me amar :D </center></h2>
                <h2><CountComp /></h2>
            </div>
        </div>
    )
}
export default ZoomImage;
