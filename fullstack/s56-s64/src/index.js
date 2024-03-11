import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
/*
  IMPORTANT NOTE:
    - The "import" statement allows us to use the code/exported modules from other files similar to how we use the "require" function in node/express Js.


*/


// createRoot - assigns the element to be manged by react with its Virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// render() - displays the react elements/components into the root.
// App component is our mother component, this is the componente we use as an entry point and where we can render all other compontents or pages.
// <React.StrictMode> - component from React that manages future or possible conflicts. It allows us extended or to expand certain error messages.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const name = 'John Smith';
// const user = {
//   firstName: 'Jane',
//   lastName: 'Smith'
// }

// function formatName(user){
//   return user.firstName + ' ' + user.lastName
// }

// const element = <h1>Hello, {formatName(user)}</h1>

/*
  IMPORTANT NOTE:
    - The syntax for creating elements in JS is very similar to HTML tags, with one major difference being it is able to apply JavaScript code.
    - The "h1" tag that we see in the above example is what we call JSX.
    -JSX allows us to create HTML elements and at the same time allows us to apply JavaScript code to these elements making it easy to write both HTML and Javascript code in a single file as opposed to creating two separate files (one for html and another for javascript syntax)
    - With JSX we can simply apply JS logic with HTML elements that allows us to change the look and functionality of our application.
*/

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element)
