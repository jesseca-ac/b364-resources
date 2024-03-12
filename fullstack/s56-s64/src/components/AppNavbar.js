import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function AppNavbar() {
	return (
			<Navbar bg="light" expand="lg">
			    <Container fluid>
			        <Navbar.Brand href="#home">Zuitt Booking</Navbar.Brand>
			        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
			        <Navbar.Collapse id="basic-navbar-nav">
			            <Nav className="ms-auto">
			            <Nav.Link href="#home">Home</Nav.Link>
			            <Nav.Link href="#link">Courses</Nav.Link>
			            </Nav>
			        </Navbar.Collapse>
			    </Container>
			</Navbar>
		)
}

/*
	IMPORTANT NOTE: 
		- Rendering -refers to the process of calling/invoking a component returning a set of instructions for creating DOM.
		- Mounting - when REACT js "renders" or displays the component and builds the initial DOM based on the instructions.
		- Unlike HTML tags where we use the lowercase letters for creating them, React JS components use the Pascal Case indicating that we are using a component instead of using an HTML.

*/



/*
	- React JS components are independent, reusable pieces of code which normally containts JavaScript and JSX syntax which make up a part of our application.
	- An examples of this would be a navbar which contains several HTML elements that creates an interface for navigating through our application.
	- The navbar is a component which makes up a part of our application hence it is called a component. 
	- The naming convetion for REACT JS components follows the "Pascal Case" having capitalized letters for all words of the function name AND the file name associated with it.

	-The "export default" statements allow us to create a JavaScript module that will be used when the file is exported in a different component.
*/

