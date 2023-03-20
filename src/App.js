
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News'; 
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";  

const App =()=> {  

    return (
      <div>
          <Router>
          <Navbar/>
          
          <Routes> 
            <Route exact path='/' element={<News key="general" country="in" category="general"/>}/>
            <Route exact path='/bussiness' element={<News key="bussiness" country="in" category="bussiness"/>}/>
            <Route exact path='/entertainment' element={<News key="entertainment" country="in" category="entertainment"/>}/>
            <Route exact path='/general' element={<News key="general" country="in" category="general"/>}/>
            <Route exact path='/health' element={<News key="health" country="in" category="health"/>}/>
            <Route exact path='/science' element={<News key="science" country="in" category="science"/>}/>
            <Route exact path='/sports' element={<News key="sports" country="in" category="sports"/>}/>
            <Route exact path='/technology' element={<News key="technology" country="in" category="technology"/>}/>
          </Routes> 
          <Footer/>
        </Router>
      </div>
    )
  
}

export default App



{/* <Route exact path='/bussiness' element={<Footer key="bussiness" country="in" category="bussiness"/>} />
<Route exact path='/entertainment' element={<Footer key="entertainment" country="in" category="entertainment"/>} />
<Route exact path='/general' element={<Footer key="general" country="in" category="general"/>} />
<Route exact path='/health' element={<Footer key="health" country="in" category="health"/>} />
<Route exact path='/science' element={<Footer key="science" country="in" category="science"/>} />
<Route exact path='/sports' element={<Footer key="sports" country="in" category="sports"/>} />
<Route exact path='/technology' element={<Footer key="technology" country="in" category="technology"/>} />  */}