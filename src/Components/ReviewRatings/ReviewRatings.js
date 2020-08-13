import React from 'react';
import ReviewRatingStyles from './ReviewRatings.module.css';
import ReviewRating from './ReviewRating/ReviewRating';

const reviewRatings = (props) => {

    let starRating = [];
        for(let i=0;i<Math.ceil(props.ratings);i++) {
        starRating.push(<i className="fas fa-star" key={i}></i>);
    }

    return (
        <div>
            <span className={ReviewRatingStyles.RatingText}>User Rating &nbsp;&nbsp;{starRating} ({props.ratings.toFixed(1)})</span>
            {
                props.detailedRatings.map((el) => {
                   return <ReviewRating key={el.rating} rating={el.rating} votes={el.votes} total={props.totalVotes}/>
                })
            }
           
        </div>
    );
}

export default reviewRatings;