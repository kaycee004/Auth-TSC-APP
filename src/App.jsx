
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DropDown from './components/DropDown';

function App() {
   return (
    <>
      <Router>
        <Routes>
          <Route path='/dropdown' element={<DropDown/>}/>
          <Route element={<AuthLayout/>}>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
