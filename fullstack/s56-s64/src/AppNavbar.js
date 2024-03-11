import Containter from 'react-boostrap/Container';
import Navbar from 'react-boostrap/Navbar';
import Nav from 'react-boostrap/Nav';


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

*/



/*
	- React JS components are independent, reusable pieces of code which normally containts JavaScript and JSX syntax which make up a part of our application.
	- An examples of this would be a navbar which contains several HTML elements that creates an interface for navigating through our application.
	- The navbar is a component which makes up a part of our application hence it is called a component. 
	- The naming convetion for REACT JS components follows the "Pascal Case" having capitalized letters for all words of the function name AND the file name associated with it.
*/