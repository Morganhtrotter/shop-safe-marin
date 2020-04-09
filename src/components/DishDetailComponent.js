import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


	const DishDetail = (props) => {
		if (props.dish != null) {
			return(
				<div className="container">
					<div className="row">
						<RenderDish dish={props.dish} />
			      		<RenderComments dish={props.dish} />
				    </div>
		    	</div>
			);
		} else {
			return(
				<div></div>
			);
		}
	}

	function RenderDish({dish}) {
		if (dish != null) {
			return(
					<div className="col-12 col-md-5 m-1">
						<Card key={dish.id} >
				        <CardImg top src={dish.image} alt={dish.name} />
				        <CardBody>
				          <CardTitle>{dish.name}</CardTitle>
				          <CardText>{dish.description}</CardText>
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

	function RenderComments({dish}) {
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


export default DishDetail;