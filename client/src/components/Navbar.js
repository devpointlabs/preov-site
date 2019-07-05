import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";
import styled from 'styled-components'

const NavBar = () => (
  <Menu as={StyledMenu}>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About Us
      </Menu.Item>
    </Link>
    <Link to="/howitworks">
      <Menu.Item>
      How It Works
      </Menu.Item>
    </Link>
    <Link to="/blog">
      <Menu.Item>
      Blog
      </Menu.Item>
    </Link>
  </Menu>
)

const StyledMenu = styled(Menu)`
 padding: 1.3em;
 margin: 0;
 border-radius: 0;
`

export default NavBar;