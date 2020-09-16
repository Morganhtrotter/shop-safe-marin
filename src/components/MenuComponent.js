import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col, Button, Label } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import OneStar from './OneStarComponent';
import TwoStar from './TwoStarComponent';
import ThreeStar from './ThreeStarComponent';
import FourStar from './FourStarComponent';
import FiveStar from './FiveStarComponent';

function RenderMenuItem({ dish, comments, onClick }) {
  var sumStars = 0;
  var count = 0;
  var stars = 0;
  
  comments.map((comment) => {
    sumStars += parseInt(comment.rating);
    count++;
  });
  stars = Math.round(sumStars / count);

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
  } else if (props.stars === 5) {
    return(
      <FiveStar />
    );
  } else {
    return(
      <p className="cardText">No star ratings yet.</p>
    );
  }
}

class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.setFilter(values.filter + ";" + values.city);
  }

  render() {
    return(
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group">
          <Label htmlFor="store" className="mt-1 ml-4">Store:</Label>
          <Col md={3}>
            <Control.select model=".filter" id="filter" name="filter" className="form-control select" defaultValue="--">
              <option value="--">--</option>
              <option value="Andronico's">Andronico's</option>
              <option value="Andy's Local Market">Andy's Local Market</option>
              <option value="Andy's Sun Valley Market">Andy's Sun Valley Market</option>
              <option value="Cardenas Market">Cardenas Market</option>
              <option value="Costco Wholesale">Costco Wholesale</option>
              <option value="Fairfax Market">Fairfax Market</option>
              <option value="Good Earth">Good Earth</option>
              <option value="Harvest Market & Grocery">Harvest Market & Grocery</option>
              <option value="Inverness Store">Inverness Store</option>
              <option value="Lucky">Lucky</option>
              <option value="Mollie Stone's">Mollie Stone's</option>
              <option value="More For Less">More For Less</option>
              <option value="Novato Market">Novato Market</option>
              <option value="Nugget">Nugget</option>
              <option value="Palace Market">Palace Market</option>
              <option value="Safeway">Safeway</option>
              <option value="Sausalito Market">Sausalito Market</option>
              <option value="Scotty's Market">Scotty's Market</option>
              <option value="Smart & Final">Smart & Final</option>
              <option value="Sprouts">Sprouts</option>
              <option value="Target">Target</option>
              <option value="Trader Joe's">Trader Joe's</option>
              <option value="United">United</option>
              <option value="Walgreens">Walgreens</option>
              <option value="Whole Foods">Whole Foods</option>
              <option value="Woodlands">Woodlands</option>
            </Control.select>
          </Col>
          <Label htmlFor="city" className="mt-1 ml-4">City:</Label>
          <Col md={3}>
            <Control.select model=".city" id="city" name="city" className="form-control mb-4 select" defaultValue="--">
              <option>--</option>
              <option value="Corte Madera">Corte Madera</option>
              <option value="Fairfax">Fairfax</option>
              <option value="Greenbrae">Greenbrae</option>
              <option value="Inverness">Inverness</option>
              <option value="Kentfield">Kentfield</option>
              <option value="Larkspur">Larkspur</option>
              <option value="Mill Valley">Mill Valley</option>
              <option value="Novato">Novato</option>
              <option value="Point Reyes">Point Reyes</option>
              <option value="San Anselmo">San Anselmo</option>
              <option value="San Rafael">San Rafael</option>
              <option value="Sausalito">Sausalito</option>
              <option value="Stinson Beach">Stinson Beach</option>
              <option value="Tiburon">Tiburon</option>
            </Control.select>
          </Col>
          <Col md={3}>
              <Button type="submit" className="buttonStyle">
                  Filter
              </Button>
          </Col>
        </Row>
      </LocalForm>
    );
  };
}

const Menu = (props) => {
  const [filter, setFilter] = React.useState(null);
  var filterArr = ["--", "--"];

  if (filter !== null) {
    filterArr = filter.split(';');
  }  
  let dishes = props.dishes.dishes;
  if (filter !== null) {
    if (filterArr[0] !== null && filterArr[0] !== "--") {
      dishes = dishes.filter((dish) => dish.name === filterArr[0]);
    }
    if (filterArr[1] !== null && filterArr[1] !== "--") {
      dishes = dishes.filter((dish) => dish.city === filterArr[1]);
    }
  }

	const menu = dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
        	<RenderMenuItem dish={dish} comments={props.comments.comments.filter((comments) => comments.dishId === dish.id)} />
        </div>
      );
  });

  console.log(menu.length);

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
  else if (menu.length > 0) {
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
            <FilterForm setFilter={setFilter} />
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>STORES</h3>
            <FilterForm setFilter={setFilter} />
            <hr />
          </div>
        </div>
        <div className="row">
          <p>No stores match your filter. Please try again.</p>
        </div>
      </div>
    );
  }
}

export default Menu;