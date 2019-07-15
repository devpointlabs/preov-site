import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css"
import { BrowserRouter, } from "react-router-dom"
import { AuthProvider, } from "./providers/AuthProvider";
import ScrollToTop from "./ScrollToTop";
import { initMiddleware, } from 'devise-axios'
import ReactQuill from 'react-quill'

initMiddleware();

ReactDOM.render(
 <AuthProvider>
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
 </AuthProvider>,
  document.getElementById('root')
);

