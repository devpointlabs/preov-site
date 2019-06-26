import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import { Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/AboutUs" component={AboutUs} />
    </div>
  );
}

export default App;
