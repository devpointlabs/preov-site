  // React Imports
    import React from 'react';
    import './App.css';
  // Component Imports
  
import Home from "./components/Home/Home";
import PostForm from './components/PostForm';
import Post from './components/Post';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';



// Other Imports
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/postform" component={PostForm} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/howitworks" component={HowItWorks} />
     

    </Switch>
  </Container>
  </>
)

export default App;