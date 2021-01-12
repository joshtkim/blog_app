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
import Post from './Container/Post.js'
import data from './blog.json'



let App = () => {


  const [blog, setBlog] = useState({
    id: "" ,
    category: "" ,
    title : "" ,
    postedOn: "" ,
    author: "" ,
    // image: "" ,
    text: ""
  });

  const [slug, setSlug] = useState('');


  useEffect(() => {
      // const slug = props.match.params.slug;
      const blog = data.blogs.find(blog => blog.slug == slug);
      setBlog(blog);
      // setSlug(slug)
  }, [blog]);


  let renderHome = () => {
    return( 
      <Home />
    )
  }

  let renderBlogs = () => {
    return(
      <Blogs 
      data = {data}
      blog = {blog}
      setBlog = {setBlog}/>
    )
  }

  let renderPost = () => {
    return(
      <Post 
      data = {data}
      blog = {blog}
      setBlog = {setBlog}
      slug={slug}
      setSlug={setSlug}/>
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
        <Route path="/blogs/:slug" render={() => renderPost() }/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
