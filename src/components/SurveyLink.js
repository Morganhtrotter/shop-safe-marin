import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

function SurveyLink(props) {
	return(
		<div className="surveyLink">
			<Row>
				<Col>
					<div className="text-center">
						<p>Please help us improve our website by filling out this quick 5 minute survey:</p>
						<Button className="buttonStyle" href="https://www.surveymonkey.com/r/VRPWQM6">Survey</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default SurveyLink;