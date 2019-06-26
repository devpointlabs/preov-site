import React from 'react';
import './App.css';
import PostForm from './components/PostForm'
import HomeHero from "./components/Home/HomeHero"
import {Switch, Route} from 'react-router-dom'
import {Container, } from 'semantic-ui-react'

const App = () => (
  // <Navbar />
  <Container>
    <Switch>
      <Route exact path="/postform" component={PostForm} />
      <Route exact path="/homehero" component={HomeHero} />
    </Switch>
  </Container>
)

export default App;