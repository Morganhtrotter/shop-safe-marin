import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		console.log('DishDetail Component render is invoked');
		console.log(this.props.dish);
		return(
			<div>
				<Card key={this.props.dish.id} >
	        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
	        <CardBody>
	          <CardTitle>{this.props.dish.name}</CardTitle>
	          <CardText>{this.props.dish.description}</CardText>
	        </CardBody>
	      </Card>
      </div>
		);
	}
}

export default DishDetail;