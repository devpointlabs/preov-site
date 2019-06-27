import React from 'react';
import { Link, } from 'react-router-dom';
import Icon from '../Images/PreOvIcon.jpg'
import { Header, Image } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h1" textAlign="center">
    <Image src= { Icon } />
    Page not found return
    <Link to="/"> Home</Link>
    <Image src= { Icon }/>
  </Header>
)


export default NoMatch;


