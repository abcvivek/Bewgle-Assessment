import React from 'react';
import ReviewRatingStyles from './ReviewRating.module.css';

const reviewRating = (props) => {

    let ratingPercentage = (props.votes/props.total)*100*2;

    ratingPercentage = ratingPercentage + "%";

    const ratingStyle = {
        width : ratingPercentage
    }

    let starRating = [];
        for(let i=0;i<(props.rating);i++) {
        starRating.push(<i className="fas fa-star" key={i}></i>);
    }

    return(
        <div className={ReviewRatingStyles.Container}>
            <div className={ReviewRatingStyles.Side}>
                <div><span>{starRating}</span></div>
            </div>
            <div className={ReviewRatingStyles.Middle}>
                <div className={ReviewRatingStyles.Bar} style={ratingStyle} ></div>
            </div>
            <div className={ReviewRatingStyles.Right}>
                <div>{props.votes}</div>
            </div>
        </div>
    );
}

export default reviewRating;