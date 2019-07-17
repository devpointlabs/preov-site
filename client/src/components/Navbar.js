import React from 'react';
import { Link, } from 'react-router-dom';
import {Image, } from 'semantic-ui-react'
import styled from 'styled-components'
import icon from '../Images/PreOvIcon.jpg'
import {AuthConsumer, } from '../providers/AuthProvider'


class Navbar extends React.Component {

  rightLogOut = () => {  
    const {
      auth: {user, handleLogout}, 
    } = this.props;

  if (user) {
    return (
        <StyledLi
          name="logout"
          onClick={() => handleLogout(this.props.history)}
          style={{cursor: "pointer", float: "right"}} >
            Logout
        </StyledLi>
    );
  }}
  render(){
  return(
  <StyledList>
      <Image size="tiny" src={icon} style={{display: "inline", marginRight: ".3em"}} />
    <StyledLink to='/' >
      Home 
    </StyledLink>
    <StyledLink to='/about'>
      About 
    </StyledLink> 
    <StyledLink to='/howitworks'>
      How It Works
    </StyledLink>
    <StyledLink to='/blog' >
      Blog
    </StyledLink>
    {this.rightLogOut()}
  </StyledList>)
}}

const StyledList = styled.ul`
  background-color: white;
  margin: 0;
  padding: .6em 1em;
`

const StyledLi = styled.li`
  text-decoration: none;
  list-style: none;
  color: #5d6870;
  font-weight: 400;
  font-size: 1.4em;
  transition: background 0.4s ease;
  padding: .35em .8em;
  margin: .5em;

  @media(max-width: 602px){
    font-size: .9em !important;
  }

  &:active {
    background-color: #f7b1b7;
    color: white;
  }

  &:hover {
    background-color: #f7b1b7;
    color: white;
    border-radius: 3px;
    transition: background 0.4s ease;
  }
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: #5d6870;
  font-weight: 400;
  font-size: 1.4em;
  transition: background 0.4s ease;
  padding: .35em .8em;
  margin: .5em;
  

  @media(max-width: 602px){
    font-size: .9em !important;
  }

  &:active {
    background-color: #f7b1b7;
    color: white;
  }

  &:hover {
    background-color: #f7b1b7;
    color: white;
    border-radius: 3px;
    transition: background 0.4s ease;
  }
`

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default ConnectedNavbar;