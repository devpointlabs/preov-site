import React from "react";
import axios from "axios";

const CatPostContext = React.createContext();
export const CatPostConsumer = CatPostContext.Consumer;

export class CatPostProvider extends React.Component {
  state= { user:null };


  render () {
    return(
      <AuthContext.Provider value = {{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};