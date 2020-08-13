import React from 'react';
import FeatureRatingsStyles from './FeatureRatings.module.css';

const featureRatings = (props) => {
    
    const RatingsArray = Object.entries(props.ratings);

    return (
        
        <div>
            <h4 className={FeatureRatingsStyles.Heading}>Feature Ratings <i className="fas fa-star"></i></h4>
            {
                RatingsArray.map( el => {
                return (
                    <div className={FeatureRatingsStyles.Container} key={el}>
                        <div className={FeatureRatingsStyles.Circle}>
                            <p>{el[1]}</p>
                        </div>
                        <h4 className={FeatureRatingsStyles.Heading}>{el[0]}</h4>
                    </div>
                )})
            }
        </div>
    );
}

export default featureRatings;