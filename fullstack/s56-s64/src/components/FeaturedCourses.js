import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PreviewCourses from './PreviewCourses';
import { useState, useEffect } from 'react';

export default function FeaturedCourses(){

	const [previews, setPreviews] = useState([])

	useEffect(() => {
		fetch(`${ process.env.REACT_APP_API_URL}/courses/`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			const numbers = []
			const featured = []

			// This function generates a random number between 0 and the length of the data array (the fectched course data). It checks if the random number has already been added to the numbers array. If not, it adds the random number to the numbers array. If the random number already exists in the numbers array, it recursively calls itself to generate a new random number.
			const generateRandomNums = () => {
				let randomNum = Math.floor(Math.random() * data.courses.length)

				if(numbers.indexOf(randomNum) === -1 ){
					numbers.push(randomNum)
				} else {
					generateRandomNums()
				}
			}

			// A loop is used to iterate five times (from 0 to 4). Inside the loop, the generateRandomNums function is called to generate a random number and push it into the numbers array.
			for(let i = 0; i < 5; i++){
				generateRandomNums()

				// For each iteration of the loop, the PreviewCourses component is rendered with the corresponding course data from the data array based on the random number. The key is set to the _id of the course for React's reconciliation to track components efficiently. The resulting JSX is pused into the featured array.
				featured.push(

					// The breakpoint here is for columns
					<PreviewCourses data={data.courses[numbers[i]]} key={data.courses[numbers[i]]._id} breakPoint={2}/>
					) 
			}

			// After the loop finishes, the setPreviews function is called to update the state of the component with the featured array. This state update triggers re-render, and the PreviewCourses components are displayed on the page.
			setPreviews(featured)
		})
	}, [])

	return (
	<>
		<h2 className="text-center">Featured Courses</h2>
		<CardGroup className="justify-content-center">
			{previews}
		</CardGroup>	
	</>
	)
}