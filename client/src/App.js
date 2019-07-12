// React Imports
import React from "react";
import "./App.css";
// Component Imports
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import HowItWorks from './components/HowItWorks';
import Blog from './components/Blog/Blog';
import Footer from "./components/Footer";
import NoMatch from './components/NoMatch';
import EmailForm from "./components/EmailForm";
import PostForm from './components/Blog/PostForm';
import Post from './components/Blog/Post';
import Categories from "./components/Blog/Categories/Categories"

// Other Imports
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
// import FetchUser from './components/FetchUser';


const App = () => (
  <>
  {/* <FetchUser> */}
  <Navbar />

  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/howitworks" component={HowItWorks} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/posts/new" component={PostForm} />
      <Route exact path="/blog/posts/:id/edit" component={PostForm} />
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/emailform" component={EmailForm} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/categories" component={Categories} />
      <Route component={NoMatch} />
    </Switch>
  </Container>

  <Footer />
  {/* </FetchUser> */}
  </>
);

export default App;
