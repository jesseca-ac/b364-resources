import { Button, Row, Col } from 'react-bootstrap';


export default function Banner() {
	return (
		<Row>
			<Col className="p-5 text-center">
				<h1>Zuitt Coding Bootcamp</h1>
				<p>Opportunities for everyone, everywhere.</p>
				<Button variant="primary">Enroll now!</Button>
			</Col>
		</Row>
	)
}
/*
	- The "className" propr is used in place of the "class" attribute for HTML tags in ReactJS due to our use of JSX elements.
*/

/*
	IMPORTANT NOTE:
		-Modules are treated as objects  and object deconstruction may be applied in order to shorten the syntax when importing modules from packages.
		- Other ways to import bootstap components:
		import Button from 'react-bootstrap/Button'
		Bootstrap grid system components
		import Row from 'react-bootstrap/Row'
		import Col from 'react-bootstrap/Col'
		import { Row } from 'react-bootstrap'
		import { Col } from 'react-bootstrap'
*/