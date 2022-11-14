import React from 'react'
import Nav from './Components/Nav';
import { Route,Routes,Link } from 'react-router-dom';
import './app.css'
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <div className="App">
   <Nav/>
   <Routes>
        <Route exact path='/' element={<AboutPage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
