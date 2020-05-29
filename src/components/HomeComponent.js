import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
	return(
		<div className="bg">
			<div className="container">
				<Row className="form-group">
					<Col>
						<div className="textbox text-center">
							<p className="m-5">Grocery shopping is a necessity, even in the uncertain times we are currently living in. We have created Shop Safe to provide shoppers with data on how grocery stores in their area are implementing safety measures, so that they are able to make informed decisions about where they shop.</p>
							<Link className="text-center" to={`/menu/`} >
								<Button className="buttonStyle" innerRef="">View Stores</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Home;