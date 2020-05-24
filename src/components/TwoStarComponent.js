import React, { Component } from 'react';

class TwoStar extends Component {
	render() {
	 	return(
	 		<div>
		 		<span class="fa fa-star checked"></span>
		        <span class="fa fa-star checked"></span>
		        <span class="fa fa-star"></span>
		        <span class="fa fa-star"></span>
		        <span class="fa fa-star"></span>
		    </div>
	 	);
	} 
}

export default TwoStar;