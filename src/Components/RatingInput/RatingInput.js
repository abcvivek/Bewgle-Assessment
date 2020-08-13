import React from 'react';
import Rating from 'react-rating';
import RatingInputStyles from './RatingInput.module.css';

const ratingInput = (props) => {

    let output = (<div>
        <span className={RatingInputStyles.Heading}>Tell us your experience</span><br/>
            <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onChange={(rate) => {
                    props.change(rate);
                    }
                }
                className={RatingInputStyles.Rating}
            /><br/>
    </div>);

    if (props.status) {
        output = <p className={RatingInputStyles.Status}>Thanks for your Response!!</p>
    }

    return(
        <div>
            {output}
        </div>
        
    );
}

export default ratingInput;