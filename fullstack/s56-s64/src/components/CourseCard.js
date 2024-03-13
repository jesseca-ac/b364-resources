import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export default function CourseCard({courseProp}) {
    const {name, description, price} = courseProp;
    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components
    // Syntax
        // const [getter, setter] = useState(initialGetterValue);
    const [count, setCount] = useState(0);
    // Using the state hook returns an array with the first element being a value and the second element as a function that's used to change the value of the first element
    console.log(useState(0));


    // Function that keeps track of the enrollees for a course
    // By default JavaScript is synchronous it executes code from the top of the file all the way to the bottom and will wait for the completion of one expression before it proceeds to the next
    // The setter function for useStates are asynchronous allowing it to execute separately from other codes in the program
    // The "setCount" function is being executed while the "console.log" is already completed resulting in the value to be displayed in the console to be behind by one count.
    function enroll(){
        setCount(count + 1);
        console.log('Enrollees: ' + count);
    }

    // Checks to see if the data was successfully passed
    // console.log(props);

    // console.log(typeof props);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>{price}</Card.Text>
                <Button className="bg-primary" onClick={enroll}>Enroll</Button>
            </Card.Body>
        </Card>
    )
}

CourseCard.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}