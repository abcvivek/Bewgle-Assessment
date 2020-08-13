import React, { Component } from 'react';
import BackgroundImages from './Components/BackgroundImages/BackgroundImages';
import TopImage from './Components/TopImage/TopImage';
import Tags from './Components/SideContent/Tags/Tags';
import FeatureRatings from './Components/SideContent/FeatureRatings/FeatureRatings';
import AppStyles from './App.module.css';
import Description from './Components/Description/Description';
import ReviewRating from './Components/ReviewRatings/ReviewRatings';
import RatingInput from './Components/RatingInput/RatingInput';

class App extends Component {

  getJSONSting = () => {
    
    const JSONString = '{"name":"Cafe Goodluck","area":"Deccan Gymkhana","city":"Pune","category":["Restaurant","Cafe","Breakfast"],"coverimage":"https://media-cdn.tripadvisor.com/media/photo-s/07/53/53/9d/feast.jpg","review_rating":{"votes":[{"rating":5,"votes":271},{"rating":4,"votes":159},{"rating":3,"votes":69},{"rating":2,"votes":29},{"rating":1,"votes":55}],"total":583},"feature_rating":{"place":3.6,"food":3.5,"service":3.8,"staff":4.1,"breakfast":3.4}}';

    return JSONString;
  }

  state = {
    Restaurant : null,
    OverallRating : null,
    ReviewTaken : false
  }

  constructor() {
    super();
    const RestaurantObj = JSON.parse(this.getJSONSting());   
    this.state.Restaurant = RestaurantObj;

    let sum = 0;
    
    for(let i=0;i<RestaurantObj.review_rating.votes.length;i++)
    {
      sum = sum + (RestaurantObj.review_rating.votes[i].rating * RestaurantObj.review_rating.votes[i].votes);
    }
    
    this.state.OverallRating = sum/RestaurantObj.review_rating.total;
  }


  changeSbtBtnStatus = (props) => {
    const RestaurantObj = {...this.state.Restaurant};
    
    const ReviewRating = {...this.state.Restaurant.review_rating};

    ReviewRating.total = ReviewRating.total + 1;

    ReviewRating.votes[5-props].votes++;

    let sum = 0;

    for(let i=0;i<RestaurantObj.review_rating.votes.length;i++)
    {
      sum = sum + (RestaurantObj.review_rating.votes[i].rating * RestaurantObj.review_rating.votes[i].votes);
    }

    const OverallRating = sum/RestaurantObj.review_rating.total;

    RestaurantObj.review_rating = ReviewRating;


    this.setState ({Restaurant : RestaurantObj,OverallRating : OverallRating,ReviewTaken : true});
  }

  render() {
    return(
      <div>
        <BackgroundImages/>
          <div className={AppStyles.Container}>
            
            <div className={AppStyles.TopImage}>
              <TopImage coverImg={this.state.Restaurant.coverimage} name={this.state.Restaurant.name} area={this.state.Restaurant.area} city={this.state.Restaurant.city} rating={this.state.OverallRating}/>
            </div>
            
            <div className={AppStyles.SideContainer}>
              <div className={AppStyles.Tags}>
                <Tags tags={this.state.Restaurant.category}/>
              </div>
              <div className={AppStyles.FeatureRatings}>
                <FeatureRatings ratings={this.state.Restaurant.feature_rating}/>
              </div>          
            </div>
          </div>
          <div className={AppStyles.Container} > 
            <div className={AppStyles.Description}>
              <Description/>
            </div>
            <div className={AppStyles.ReviewRating}>
              <ReviewRating ratings={this.state.OverallRating} detailedRatings={this.state.Restaurant.review_rating.votes} totalVotes={ this.state.Restaurant.review_rating.total }/>
            </div>
            <div className={AppStyles.RatingInput}>
              <RatingInput change={this.changeSbtBtnStatus} status={this.state.ReviewTaken}/>
            </div>       
          </div>
      </div>
    );
  }
}

export default App;
