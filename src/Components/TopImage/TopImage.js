import React from 'react';
import TopImageStyles from './TopImage.module.css';

const topImage = (props) => {

    let starRating = [];
    for(let i=0;i<Math.ceil(props.rating);i++) {
        starRating.push(<i className="fas fa-star" key={i}></i>);
    }

    return (
            <div className={TopImageStyles.Container}>
                <img className={TopImageStyles.Image} src={props.coverImg} alt="CoverImage"/>
                <div className={TopImageStyles.ImageOverlay}></div>
                <div className={TopImageStyles.Centered}>
                    <h1 className={TopImageStyles.Name}>{props.name}</h1>
                    <h3 className={TopImageStyles.AreaCity}>{props.area},{props.city}</h3>
                    <span className={TopImageStyles.RatingText}>{props.rating.toFixed(1)} {starRating}</span>
                    
                </div>  
            </div>
    );
}

export default topImage;