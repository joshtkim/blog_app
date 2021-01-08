import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './CSS/App.css';
import './CSS/Navbar.css';
import './CSS/Header.css';
import './CSS/Blogs.css';


import Home from './Components/Home.js'
import Header from './Components/Header.js'
import Navbar from './Components/Navbar.js'
import Blogs from './Container/Blogs.js'
import data from './blog.json'



let App = () => {

  // let [foods, setFoods] = useState( [] )
  // let [word, setWord] = useState()

  // console.log("Food", foods)

  // let handleClick = (evt) => {
  //   setFoods((prevFoods) => {return [...prevFoods, "new word"]})
  // }

  let renderHome = () => {
    return( 
      <Home />
    )
  }

  let renderBlogs = () => {
    return(
      <Blogs 
      data = {data}/>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />

      <Switch>
        <Route path="/home" render={() => renderHome() } />
        <Route path="/blogs"  render={() => renderBlogs() }/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
