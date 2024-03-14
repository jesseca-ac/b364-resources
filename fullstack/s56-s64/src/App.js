import './App.css';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
// import Home from './pages/Home'
// import Courses from './pages/Courses'
import Register from './pages/Register';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
        <AppNavbar/>
        <Container>
            <Register/>
        </Container>
    </>
  );
}
/*
  IMPORTANT NOTE:
    - When importing componentes, it's good practice to import them in order they appear in our file/browser structure to make it easy to locate files when needed.
    -Based on the example above, the "Banner" compopnent is imported after the "AppNavbar" component which follows the file/folder structure found in our project.
    -In React JS,multiple components rendered in a single component should be wrapped in a parent component.
    -Not doing so will return an error in our application.
    - The "JSX Fragment" is a component that would avoid rendering multiple components errors.
*/

export default App;
