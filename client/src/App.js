  // React Imports
    import React from 'react';
    import './App.css';
  // Component Imports
  
import Home from "./components/Home/Home"
import PostForm from './components/PostForm'
import AboutUs from './components/AboutUs';

// Other Imports
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'

const App = () => (
  // <Navbar />
  <Container>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/postform" component={PostForm} />
      <Route exact path="/AboutUs" component={AboutUs} />
    </Switch>
  </Container>
)

export default App;