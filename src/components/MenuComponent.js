import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import OneStar from './OneStarComponent';
import TwoStar from './TwoStarComponent';
import ThreeStar from './ThreeStarComponent';
import FourStar from './FourStarComponent';
import FiveStar from './FiveStarComponent';

function RenderMenuItem({ dish, comments, onClick }) {
  console.log(comments);
  var sumStars = 0;
  var count = 0;
  var stars = 0;
  
  comments.map((comment) => {
    sumStars += parseInt(comment.rating);
    count++;
  });
  stars = Math.round(sumStars / count);
  console.log(stars);

	return(
	    <Card class="card">
        <Link to={`/menu/${dish.id}`} >
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle><span class="cardTitle">{dish.name.toUpperCase()}</span></CardTitle>
              <CardText text="light"><span class="cardText">{dish.address}</span></CardText>
              <GetStars stars={stars} />
          </CardImgOverlay>
        </Link>
      </Card>
	);
}

function GetStars(props) {
  if (props.stars === 1) {
    return(
      <OneStar />
    );
  } else if (props.stars === 2) {
    return(
      <TwoStar />
    );
  } else if (props.stars === 3) {
    return(
      <ThreeStar />
    );
  } else if (props.stars === 4) {
    return(
      <FourStar />
    );
  } else {
    return(
      <FiveStar />
    );
  }
}

const Menu = (props) => {
	const menu = props.dishes.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
        	<RenderMenuItem dish={dish} comments={props.comments.comments.filter((comments) => comments.dishId === dish.id)} />
        </div>
      );
  });

  if (props.dishes.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.dishes.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  }
  else
    return (
        <div className="container">
          <div className="row">
            {/*
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem> 
            </Breadcrumb>
            */}
            <div className="col-12">
              <h3>STORES</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            {menu}
          </div>
        </div>
    );
}

export default Menu;