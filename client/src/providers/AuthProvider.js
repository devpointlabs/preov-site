import React from "react";
import axios from "axios";



export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
export class AuthProvider extends React.Component {
  state = { user: null};

  handleRegister = (user, history) => {
    axios
      .post("/api/auth", user)
      .then(res => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };
  // componentDidMount() {
  //   axios.get("/api/categories").then(res => {
  //     this.setState({ categories: res.data });
  //   });
  //   axios.get("/api/posts").then(res => {
  //     this.setState({ posts: res.data });
  //   });
  // }
  handleLogin = (user, history) => {
    axios
      .post("/api/auth/sign_in", user)
      .then(res => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };
  handleLogout = history => {
    axios
      .delete("/api/auth/sign_out")
      .then(res => {
        this.setState({ user: null });
        history.push("/login");
      })
      .catch(res => {
        console.log(res);
      });
  };
  // searchPosts = (e, search) => {
  //   e.preventDefault();
  //   axios.get(`/api/search_posts?search=${search}`).then(res => {
  //     this.setState({ posts: res.data });
  //   });
  // };

  // handleCatPosts = (e, value ) => {
  //   axios
  //     .get(`/api/filter_category/${value}`)
  //     .then(res => this.setState({ posts: res.data }));
  // }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: user => this.setState({ user }),
          // handleCatPosts: this.handleCatPosts(e, value)
          // setSearch
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
