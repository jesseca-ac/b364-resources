import { useEffect, useState, useContext, useCallback } from 'react';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import UserContext from '../UserContext';
import CourseCard from '../components/CourseCard';

export default function Courses() {

	const {user} = useContext(UserContext)

	const [courses, setCourses] = useState([]);

	
   const fetchData = useCallback(() => {

   	let fetchUrl = user.isAdmin === true? "http://localhost:4000/courses/all" : "http://localhost:4000/courses/"

   	fetch(fetchUrl, {
   		headers: {
   			Authorization: `Bearer ${ localStorage.getItem('token')}`
   		}
   	})
   	.then(res => res.json())
   	.then(data => {
   		console.log(data);
   		console.log(typeof data.message)

   		if (typeof data.message !=="string") {
   			setCourses(data.courses);
   		} else {
   			setCourses([])
   		}
   	})
   }, [user.isAdmin])

   useEffect(() => {

   		fetchData()

   }, [fetchData])
		
		
	return(
			<>
				{
					(user.isAdmin === true) ?
						<AdminView coursesData={courses} fetchData={fetchData}  />

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