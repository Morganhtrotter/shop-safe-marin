import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Label, Row, Col,
    CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import OneStar from './OneStarComponent';
import TwoStar from './TwoStarComponent';
import ThreeStar from './ThreeStarComponent';
import FourStar from './FourStarComponent';
import FiveStar from './FiveStarComponent';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const required = (val) => val && val.length;
const validEmail = (val) => !/^[^!@#$%^&*]*(fuck| ass|shit|cunt|piss|dick|fag|pussy|nigger|nigga|chink|cock|twat| cum|boob|bitch|butt| tit)[^!@#$%^&*]*/i.test(val);

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
      this.toggleModal();
      this.props.postComment(this.props.dishId, values.rating, values.yourname, 
      			values.comment, values.ymasks, values.nmasks, values.mmasks,
      			values.carts, values.sanitizer,
      			values.monitor, values.oneway, values.register, values.card,
      			values.numcust, values.gloves, values.curb, values.delivery);
	}

	render() {
		return(
			<React.Fragment>
				<Button outline color="secondary" onClick={this.toggleModal}>
					<span className="fa fa-pencil"></span> Submit Review
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Reviews</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={10}>Stars</Label>
							</Row>
							<Row className="form-group">
								<Col>
									<Control.select model=".rating" id="rating" name="rating" className="form-control">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="from-group">
								<Label htmlFor="yourname" md={10}>Your Name</Label>
							</Row>
							<Row className="form-group">
								<Col>
									<Control.text model=".yourname" id="yourname" name="yourname"
											placeholder="Your Name (optional)"
											className="form-control"
											validators={{
												maxLength: maxLength(15)
											}} />
									<Errors 
											className="text-danger"
											model=".yourname"
											show="touched"
											messages={{
												maxLength: 'Must be 15 characters or less'
											}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="checklist" md={10}>Do they require masks?</Label>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".ymasks" id="ymasks" name="masks"
                                                className="form-check-input"
                                                class="masks"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>yes</span>
                                        </Label>
                                    </div>
								</Col>
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".nmasks" id="nmasks" name="masks"
                                                className="form-check-input"
                                                class="masks"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>no</span>
                                        </Label>
                                    </div>
								</Col>
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".mmasks" id="mmasks" name="masks"
                                                className="form-check-input"
                                                class="masks"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>not sure</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".ycarts" id="ycarts" name="carts"
                                                className="form-check-input"
                                                class="carts"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>yes</span>
                                        </Label>
                                    </div>
								</Col>
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".ncarts" id="ncarts" name="carts"
                                                className="form-check-input"
                                                class="carts"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>no</span>
                                        </Label>
                                    </div>
								</Col>
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".mcarts" id="mcarts" name="carts"
                                                className="form-check-input"
                                                class="carts"
                                                onClick={selectOnlyThis(this, this.props.name)}
                                                /> {' '}
                                            <span>not sure</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".carts" id="carts" name="carts"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Disinfects carts?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".sanitizer" id="sanitizer" name="sanitizer"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Provides hand sanitizer upon entry/exit?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".monitor" id="monitor" name="monitor"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Has empoyee(s) monitoring the entrance?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".oneway" id="oneway" name="oneway"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>One-way Isles?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".register" id="register" name="register"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Social Distancing measures enforced at the register?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".card" id="card" name="card"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Card-only payment?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".numcust" id="numcust" name="numcust"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Controls the number of customers in the store?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".gloves" id="gloves" name="gloves"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Offers gloves to customers?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".curb" id="curb" name="curb"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Curbside pick-up available?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".delivery" id="delivery" name="delivery"
                                                className="form-check-input"
                                                /> {' '}
                                            <span>Delivery available?</span>
                                        </Label>
                                    </div>
								</Col>
							</Row>
							<Row className="from-group">
								<Label htmlFor="comment" md={10}>Review</Label>
							</Row>
							<Row className="form-group">
								<Col>
									<Control.textarea model=".comment" id="comment" name="comment"
											rows="6"
											className="form-control"
											validators={{
												required, validEmail
											}} />
									<Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Your language is outrageous'
                                        }}	/>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	};
}

const DishDetail = (props) => {
	if (props.isLoading) {
		return(
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	}
	else if (props.errMess) {
		return(
			<div className="container">
				<div className="row">
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	}
	else if (props.dish != null) {
		return(
			<div className="container">
				<div className="row">
			{/*
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem> 
          </Breadcrumb>
          	*/}
          <div className="col-12">
            <h3><strong>{props.dish.name.toUpperCase()}</strong><br />{props.dish.address.toUpperCase()}</h3>
            <hr />
          </div>
        </div>
			<div className="row">
				<RenderDish dish={props.dish} comments={props.comments}/>
	      		<RenderComments comments={props.comments}
		      		postComment={props.postComment}
		      		dishId={props.dish.id} />
		  	</div>
	    </div>
		);
	} else {
		return(
			<div></div>
		);
	}
}

function selectOnlyThis(id, name){
	console.log(id.props.name);
  var myCheckbox = document.getElementsByName(name);
  Array.prototype.forEach.call(myCheckbox,function(el){
  	el.checked = false;
  });
  id.checked = true;
}

function RenderDish({ dish, comments }) {
	var percentMasks = 0;
	var percentCarts = 0;
	var percentSanitizer = 0;
	var percentMonitor = 0;
	var percentOneway = 0;
	var percentRegister = 0;
	var percentCard = 0;
	var percentCust = 0;
	var percentGloves = 0;
	var percentCurb = 0;
	var percentDeliver = 0;
	if (comments != null) {
		var numMasks = 0;
		var numCarts = 0;
		var numSanitizer = 0;
		var numMonitor = 0;
		var numOneway = 0;
		var numRegister = 0;
		var numCard = 0;
		var numCust = 0;
		var numGloves = 0;
		var numCurb = 0;
		var numDelivery = 0;
		var count = 0;
		comments.map((comment) => {
			if (comment.masks != null) {
				numMasks++;
			}
			if (comment.carts != null) {
				numCarts++;
			}
			if (comment.sanitizer != null) {
				numSanitizer++;
			}
			if (comment.monitor != null) {
				numMonitor++;
			}
			if (comment.oneway != null) {
				numOneway++;
			}
			if (comment.register != null) {
				numRegister++;
			}
			if (comment.card != null) {
				numCard++;
			}
			if (comment.numcust != null) {
				numCust++;
			}
			if (comment.gloves != null) {
				numGloves++;
			}
			if (comment.curb != null) {
				numCurb++;
			}
			if (comment.delivery != null) {
				numDelivery++;
			}
			count++;
		});
		if (count === 0) {
			count++;
		}
		percentMasks = numMasks / count;
		percentCarts = numCarts / count;
		percentSanitizer = numSanitizer / count;
		percentMonitor = numMonitor / count;
		percentOneway = numOneway / count;
		percentRegister = numRegister / count;
		percentCard = numCard / count;
		percentCust = numCust / count;
		percentGloves = numGloves / count;
		percentCurb = numCurb / count;
		percentDeliver = numDelivery / count;

	}

	if (dish != null) {
		return(
			<div className="col-12 col-md-5 m-1">
				<FadeTransform in 
					transformProps={{
						exitTransform: 'scale(0.5) translateY(-50%)'
					}}>
					<Card key={dish.id} >
				    <CardImg className="cardimg" top src={baseUrl + dish.image} alt={dish.name} />
			      <CardBody>
			        <CardTitle>{dish.name}</CardTitle>
			        <CardText>{Math.round(percentMasks * 100)}% of users say this store requires masks.</CardText>
			        <CardText>{Math.round(percentCarts * 100)}% of users say this store disinfects carts.</CardText>
			        <CardText>{Math.round(percentSanitizer * 100)}% of users say this store provides hand sanitizer upon entry/exit.</CardText>
			        <CardText>{Math.round(percentMonitor * 100)}% of users say this store has employee(s) monitoring the entrance.</CardText>
			        <CardText>{Math.round(percentOneway * 100)}% of users say this store has one-way isles.</CardText>
			        <CardText>{Math.round(percentRegister * 100)}% of users say this store enforces social distancing at the register.</CardText>
			        <CardText>{Math.round(percentCard * 100)}% of users say this store is card-only.</CardText>
			        <CardText>{Math.round(percentCust * 100)}% of users say this store controls the number of customers in the store.</CardText>
			        <CardText>{Math.round(percentGloves * 100)}% of users say this store offers gloves to customers.</CardText>
			        <CardText>{Math.round(percentCurb * 100)}% of users say this store offers curbside pick-up.</CardText>
			        <CardText>{Math.round(percentDeliver * 100)}% of users say this store offers delivery.</CardText>
			      </CardBody>
				  </Card>
			  </FadeTransform>
		  </div>
    );
	} else {
		return(
			<div></div>
		);
	}
}

function RenderComments({ comments, postComment, dishId }) {
  var sumStars = 0;
  var count = 0;
  var stars = 0;

  const commentList = comments.map((comment) => {
	sumStars += parseInt(comment.rating);
    count++;

    return (
      <ul key={comment.id} className="list-unstyled">
      	<Stagger in>
      		<Fade in>
		        <li>{comment.comment}</li>
		        <li>
		          --{comment.author},{" "}
		          {new Intl.DateTimeFormat("en-US", {
		            year: "numeric",
		            month: "short",
		            day: "2-digit"
		          }).format(new Date(comment.date))}
		        </li>
		      </Fade>
        </Stagger>
      </ul>
    );
  });

  stars = Math.round(sumStars / count);

  if (comments.length === 0) {
  	return (
  		<div className="col-12 col-md-5 m-1">
  			<p>No star ratings yet.</p>
  			<br />
	        <h4>Reviews</h4>
	        <p>No Reviews Yet. Be the first to post a review.</p>
	        <CommentForm dishId={dishId} postComment={postComment} />
      	</div>
  	);
  }
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
      	<GetStars stars={stars} />
      	<br />
        <h4>Reviews</h4>
        {commentList}
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else {
    return (
    	<div />
    );
  }
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


export default DishDetail;