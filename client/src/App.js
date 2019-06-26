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
      <Route exact path="/home" component={Home} />
      <Route exact path="/Post" component={Post} />
      <Route exact path="/postform" component={PostForm} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/HowItWorks" component={HowItWorks} />
     

    </Switch>
  </Container>
  </>
)

export default App;