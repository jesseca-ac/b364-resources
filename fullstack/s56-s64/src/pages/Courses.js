import CourseCard from '../components/CourseCard';
// import coursesData from '../data/coursesData';
import { useEffect, useState } from 'react';


export default function Courses() {

	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/courses/')
		.then(res => res.json())
		.then(data => {
		    
		    console.log(data);

		    setCourses(data.courses.map(course => {
		        return (
		            <CourseCard key={course._id} courseProp={course}/>
		        );
		    }));

		});

    }, []);

		
	return (
		<>
			{courses}
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