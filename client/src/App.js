// React Imports
import React from "react";
import "./App.css";
// Component Imports
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import PostForm from './components/PostForm';
import Post from './components/Post';
import HowItWorks from './components/HowItWorks';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

// Other Imports
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/posts/new" component={PostForm} />
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/howitworks" component={HowItWorks} />
      <Route exact path="/emailform" component={EmailForm} />
      <Route exact path="/contactus" component={ContactUs} />

      <Route component={NoMatch} />
    </Switch>
  </Container>
  <Footer />
  </>
);

export default App;
