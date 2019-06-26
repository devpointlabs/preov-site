import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import PostForm from './components/PostForm'
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'

const App = () => (
  // <Navbar />
  <Container>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/postform" component={PostForm} />
    </Switch>
  </Container>
)

export default App;