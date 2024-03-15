import './App.css';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Home from './pages/Home'
import Courses from './pages/Courses'
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

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
  return (
    <Router>
        <Container fluid>
            <AppNavbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </Container>
    </Router>
  );
}
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
