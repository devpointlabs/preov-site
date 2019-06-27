import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";
import PreIcon from '../Images/PreOvIcon.jpg'

const NavBar = () => (
  <Menu>
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
    <Link to="/blogs">
      <Menu.Item>
      Blog
      </Menu.Item>
    </Link>
  </Menu>
)

export default NavBar;