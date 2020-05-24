import React, { Component } from 'react';

class ThreeStar extends Component {
	render() {
	 	return(
	 		<div>
		 		<span class="fa fa-star checked"></span>
		        <span class="fa fa-star checked"></span>
		        <span class="fa fa-star checked"></span>
		        <span class="fa fa-star"></span>
		        <span class="fa fa-star"></span>
		    </div>
	 	);
	} 
}

export default ThreeStar;