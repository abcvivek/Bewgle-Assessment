import React from 'react';
import BackgroundImagesStyles from './BackgroundImages.module.css';
import Illustration1 from '../../Assets/Images/Illustration1.png';
import Illustration2 from '../../Assets/Images/Illustration2.png';
import Illustration3 from '../../Assets/Images/Illustration3.png';
import Illustration4 from '../../Assets/Images/Illustration4.png';

const backgroundImages = () => {
    return(
        <div>
        <img className={BackgroundImagesStyles.Image1} src={Illustration1} alt="Illustration 1"/>
        <img className={BackgroundImagesStyles.Image2} src={Illustration2} alt="Illustration 2"/>
        <img className={BackgroundImagesStyles.Image3} src={Illustration3} alt="Illustration 3"/>
        <img className={BackgroundImagesStyles.Image4} src={Illustration4} alt="Illustration 4"/>
        </div>
    );
}

export default backgroundImages;