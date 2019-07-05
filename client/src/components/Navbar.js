import React from 'react';
import { Link, } from 'react-router-dom';
import {Image, } from 'semantic-ui-react'
import styled from 'styled-components'
import icon from '../Images/PreOvIcon.jpg'

const NavBar = () => (
  <StyledList>
      <Image size="tiny " src={icon} style={{display: "inline"}} />
    <StyledLink to='/' style={{ margin: '.5em'}}>
      Home 
    </StyledLink>
    <StyledLink to='/about' style={{ margin: '.5em'}}>
      About 
    </StyledLink> 
    <StyledLink to='/howitworks' style={{ margin: '.5em'}}>
      How It Works
    </StyledLink>
    <StyledLink to='/blog' style={{ margin: '.5em'}}>
      Blog
    </StyledLink>
  </StyledList>
)

const StyledList = styled.ul`
  background-color: white;
  margin: 0;
  padding: 1.5em;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: #5d6870;
  font-weight: 700;
  font-size: 1.4em;
  transition: background 0.4s ease;
  padding: 1em 1.5em;

  &:hover {
    background-color: #f7b1b7;
    color: white;
    border-radius: 4px;
    transition: background 0.4s ease;
  }
`

export default NavBar;