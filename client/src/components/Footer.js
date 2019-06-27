import React from 'react';
import { Link, } from 'react-router-dom';
import PreIcon from '../Images/PreOvIcon.jpg'
import { Menu, Grid, Icon, Segment } from "semantic-ui-react";

const Footer = () => (
<>
  <Segment>
  <Grid columns={3}>
    <Grid.Column>
  <Menu compact vertical>

    {/* <Menu.Item>
    <Image src= { PreIcon } />
    </Menu.Item> */}

    <Link to="/">
      <Menu.Item >
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
      <Menu.Item >
      Blog
      </Menu.Item>
    </Link>
  </Menu>
    </Grid.Column>

    <Grid.Column>
    <Menu compact >
    <Link to="/">
      <Menu.Item>
      Category
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      Health
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      Articles
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
        things
      </Menu.Item>
    </Link>
  </Menu>
    </Grid.Column>
    
    <Grid.Column>
    <Menu compact >
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'instagram'/>
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'facebook'/>
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'twitter'/>
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'youtube'/>
      </Menu.Item>
    </Link>
  </Menu>
    </Grid.Column>
  </Grid>
  <div>
    <h4 style={{textAlign:'center'}}>© 2019 by PreOv, LLC. </h4>
  </div>

  </Segment>
</>
)


export default Footer;