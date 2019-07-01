// React Imports
import React from "react";
import "./App.css";
// Component Imports
import Navbar from './components/Navbar';
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import HowItWorks from './components/HowItWorks';
import Blog from './components/Blog/Blog';
import Footer from "./components/Footer";
import NoMatch from './components/NoMatch';
import EmailForm from "./components/EmailForm";
import PostForm from './components/PostForm';
import Post from './components/Post';

// Other Imports
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/howitworks" component={HowItWorks} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/posts/new" component={PostForm} />
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/emailform" component={EmailForm} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  <Footer />
  </>
);

export default App;
