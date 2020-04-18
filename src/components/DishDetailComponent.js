import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'; 


	const DishDetail = (props) => {
		if (props.dish != null) {
			return(
				<div className="container">
					<div className="row">
	          <Breadcrumb>
	            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
	            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem> 
	          </Breadcrumb>
	          <div className="col-12">
	            <h3>{props.dish.name}</h3>
	            <hr />
	          </div>
	        </div>
					<div className="row">
						<RenderDish dish={props.dish} />
			      <RenderComments comments={props.comments} />
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

	function RenderComments({comments}) {
      console.log(comments);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

      if (comments != null)
          if (comments.comment != null) {
            const listComments = comments.map((comment) => 
              <li>{comments.comment}<br /><br />{"--" + comments.comment 
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