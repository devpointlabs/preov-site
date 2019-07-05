import React from 'react';
import { Link, } from 'react-router-dom';
import PreIcon from '../Images/PreOvIcon.jpg'
import { Menu, Grid, Image, Icon, Segment, Header } from "semantic-ui-react";

class Footer extends React.Component {
state = {categories: []}
render(){return(
<>
  <Segment>
  <Grid columns={3}>
    
    <Grid.Column>
  <Menu compact vertical>

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
    <Menu compact vertical>
    <Link to="/blog">
      <Menu.Item>
      <Header as='h4'>All Topics</Header>
      </Menu.Item>
    </Link>
    {/* TODO: render these dynamically */}
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
    <Menu compact vertical>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'instagram'/>
      Instagram
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'facebook'/>
      Facebook
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'twitter'/>
      Twitter
      </Menu.Item>
    </Link>
    <Link to="/">
      <Menu.Item>
      <Icon size= 'big' name = 'youtube'/>
      Youtube
      </Menu.Item>
    </Link>
  </Menu>
    </Grid.Column>
    
  </Grid>
  <Header as="h1" textAlign="center">
    <Image src= { PreIcon } />
  </Header>
  <div>
    <p style={{textAlign:'center'}}>© 2019 by PreOv, LLC. </p>
  </div>

  </Segment>
</>
)}
}

export default Footer;