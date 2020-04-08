import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		if (this.props.dish != null) {
			return(
				<div className="container">
					<div className="row">
						{this.renderDish(this.props.dish)}
			      		{this.renderComments(this.props.dish)}
				    </div>
		    	</div>
			);
		} else {
			return(
				<div></div>
			);
		}
	}

	renderDish(dish) {
		if (dish != null) {
			return(
					<div className="col-12 col-md-5 m-1">
						<Card key={this.props.dish.id} >
				        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
				        <CardBody>
				          <CardTitle>{this.props.dish.name}</CardTitle>
				          <CardText>{this.props.dish.description}</CardText>
				        </CardBody>
				      </Card>
			      	</div>
	      	);
		} else {
			return(
				<div></div>
			);
		}
	}

	renderComments(dish) {
      console.log(dish);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

      if (dish != null)
          if (dish.comments != null) {
            const listComments = dish.comments.map((comments) => 
              <li>{comments.comment}<br /><br />{"--" + comments.author 
                  + " , "
                  + months[(new Date(comments.date)).getMonth()] + " "
                  + (new Date(comments.date)).getDate() + ", "
                  + (new Date(comments.date)).getFullYear()}<br /><br /></li>
            );
            return(
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                  <ul className="list-unstyled">{listComments}</ul>
              </div>
            );
          } else {
            return(
              <div></div>
            );
          }
      else
          return(
            <div></div>
          );
    }
}

export default DishDetail;