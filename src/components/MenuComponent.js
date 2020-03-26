import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
      console.log('Menu Component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <DishDetail dish={dish} />
            );
        else
            return(
                <div></div>
            );
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
              <div>
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;