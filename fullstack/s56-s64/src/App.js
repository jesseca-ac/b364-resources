import './App.css';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Home from './pages/Home'
import Courses from './pages/Courses'
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from './UserContext';

/*
  - React JS is a single page application (SPA)
    - Whenever a link is clicked, it functions as if the page is being reloaded but what it actually does is it goes through the process of rendering, mounting, rerendering and unmounting of the components.
    - When a link is clicked, React JS changes the url of the application to mirror how HTML accesses its urls
    - It renders the component excuting the function component and it's expressions.
    - After rendering it mouns the component displaying the elements
    - Whenever a state is updated or changes are made with React JS, it rerenders the component
    - Lastly, when a different page is loaded, it unmounts the current component and repeats this process
    - The updating of the user interface closely mirrors that of how HTML deals with page navigation with the exception that REACT JS does not reload the whole page.
*/

function App() {

  // State hook for the user state that's defined here for a global scope
  // Initialized as an object with properties from the localStorage
  // This will be used to store the user information and will be used for validating if a user is logged in on the app or not
  const [user, setUser] = useState({
    token: localStorage.getItem('token')
  })

  // Function for clearing localStorage on logout
  const unsetUser = () => {
    localStorage.clear();
  }

  // Used to check if the user information is properly stored upon login and the localStorage information is cleared upon logout
  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])


  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
          <Container fluid>
              <AppNavbar/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/courses" element={<Courses/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/logout" element={<Logout/>} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="*" element={<Error/>} />
              </Routes>
          </Container>
      </Router>
    </UserProvider>
  );
}
/*
  IMPORTANT NOTE:
    -Storing information in a context object is done by providing the information using tthe corresponding "Provider" component and passing the information via the "value" prop.
    - All the information provided to the Provider component can be accessed later on from the context object as properties.
*/
/*
  IMPORTANT NOTE: 
      - The 'BrowserRouter' component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser.

      - The 'Routes' component holds all our Route components. It selects which 'Route' component is to be shown based on the URL endpoint. 

*/



/*
  IMPORTANT NOTE:
    - When importing componentes, it's good practice to import them in order they appear in our file/browser structure to make it easy to locate files when needed.
    -Based on the example above, the "Banner" compopnent is imported after the "AppNavbar" component which follows the file/folder structure found in our project.
    -In React JS,multiple components rendered in a single component should be wrapped in a parent component.
    -Not doing so will return an error in our application.
    - The "JSX Fragment" is a component that would avoid rendering multiple components errors.
*/

export default App;
