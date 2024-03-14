import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Register() {

	// State hooks to store the valus of the input fields
	const [firstName,setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(mobileNo);
	console.log(password);
	console.log(confirmPassword);

	function registerUser(e) {

		// Prevents page redirection via form submission
		e.preventDefault();

		fetch('http://localhost:4000/users/register', {

		method:
		headers: {

		},
		body: JSON.stringify({
			
		})
		})
	}


	useEffect(()=> {

		if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !=="" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)){

			setIsActive(true)

		} else {

			setIsActive(false)

		}
	},[firstName,lastName,email,mobileNo,password,confirmPassword])

	/*
		Important Note: 
			- useEffect() has two arguments, function and dependency
				- function - represents the side effect you want to perform.
				This will be executed when the component renders.
				- dependency - optional array. The effect will run when there are changes in the component's dependencies. When there is no provided array, the effect will run on every render of the component.
	*/


	return (

		<Form>
		<h1 className="my-5 text-center">Register</h1>
			<Form.Group>
				<Form.Label>First Name:</Form.Label>
				<Form.Control 
					type="text" 
					placeholder="Enter First Name" 
					required
					value={firstName}
					onChange={e => {setFirstName(e.target.value)}}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Last Name:</Form.Label>
				<Form.Control 
					type="text" 
					placeholder="Enter Last Name" 
					required
					value={lastName}
					onChange={e => {setLastName(e.target.value)}}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					type="email" 
					placeholder="Enter Email" 
					required
					value={email}
					onChange={e => {setEmail(e.target.value)}}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Mobile No:</Form.Label>
				<Form.Control 
					type="number" 
					placeholder="Enter 11 Digit No." 
					required
					value={mobileNo}
					onChange={e => {setMobileNo(e.target.value)}}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Enter Password" 
					required
					value={password}
					onChange={e => {setPassword(e.target.value)}}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Confirm Password:</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Confirm Password" 
					required
					value={confirmPassword}
					onChange={e => {setConfirmPassword(e.target.value)}
				}/>
			</Form.Group>
			{
				isActive

				? <Button variant="primary" type="submit">Submit</Button>
				: <Button variant="primary" disabled>Submit</Button>
			}
		</Form>

	)
}
// IMPORTANT NOTE: 
	/*
		- Whenever a state of a component changes, the component rerenders the whole component executing any code found in the component. This is the reason why every individual input added to a form input prints out a console message. 
		- The "e.target.value" property allows us to gain access to the input field's current data value to be used when submitting to the form data/the value for our input field.

	*/