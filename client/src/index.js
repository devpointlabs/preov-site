import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import { PostCatProvider } from "./providers/PostCatProvider";
import ScrollToTop from "./ScrollToTop";
import { initMiddleware } from "devise-axios";

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <PostCatProvider>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </PostCatProvider>
  </AuthProvider>,
  document.getElementById("root")
);
