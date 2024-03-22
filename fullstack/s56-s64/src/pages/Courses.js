import { useEffect, useState, useContext } from 'react';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import UserContext from '../UserContext';
import CourseCard from '../components/CourseCard';

export default function Courses() {

	const {user} = useContext(UserContext)

	const [courses, setCourses] = useState([]);

	let url; 

	if(user.isAdmin){
		url = 'http://localhost:4000/courses/all'
	} else {
		url = 'http://localhost:4000/courses/';
	}

   useEffect(() => {
   		fetch(url, {
   			headers: {
   				Authorization: `Bearer ${localStorage.getItem('token')}`
   			}
   		})
   		.then(res => res.json())
   		.then(data => {
   			console.log(data);
   		setCourses(data.courses.map(course => {
   						return (
   							<CourseCard key={course._id} courseProp={course} />
   						
   							)
   					}))
   				})
   		}, [])
		
	return(
			<>
				{
					(user.isAdmin === true) ?
						<AdminView coursesData={courses} />

					:

						<UserView coursesData={courses} />
				}
			</>
		
			)
}
	

	// console.log(coursesData[0]);
	/* 
		- The "course" in the courseCard component is called a "prop"
		which is a shorthand for "property".
	*/
	// The "map" method loops through the individual course objects in our array and returns a component for each course using the arrow function.
	// Multiple components created throught the map method must have a unique "key" that will help React JS identify which components/elements have been changed, added, or removed.
	// Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp.