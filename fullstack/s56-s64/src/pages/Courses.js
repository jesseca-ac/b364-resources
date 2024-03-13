import CourseCard from '../components/CourseCard';
import coursesData from '../data/coursesData';


export default function Courses() {
	console.log(coursesData);
	/* 
		- The "course" in the courseCard component is called a "prop"
		which is a shorthand for "property".
	*/
	return(
		<>
			<CourseCard courseProp={coursesData[0]}/>	
		</>
)
}