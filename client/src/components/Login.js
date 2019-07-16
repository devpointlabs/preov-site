import React from 'react';
import { Link, } from 'react-router-dom';
import { AuthConsumer, } from "../providers/AuthProvider";
import styled from "styled-components";
import {Button, Form, Container, Segment, Header, Divider, Grid, Icon } from 'semantic-ui-react';

class Login extends React.Component {
  state = {email: '', password: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin ({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }

  render () {
    const { email, password, } = this.state;

      return(
          <>
          <StyledContainer >
          <Header as='h1' textAlign='center' style={{color: 'rgb(165, 212, 239)'}}> 
          L O G I N 
          </Header>

          <Header as='h3' icon textAlign='center' style={{color: 'rgb(165, 212, 239)'}}>
         <Icon name='users' circular style={{color: 'rgb(165, 212, 239)'}}/>
            <Header.Content>Join the Family</Header.Content>
            </Header>

            <StyledSeg placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>

          <Form onSubmit={this.handleSubmit}>
            <Form.Input
            icon='user'
            iconPosition='left'
            label="Email"
            autoFocus
            required
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
            />
            <Form.Input
            icon='lock' 
            iconPosition='left'
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
              <Button as={StyledButton} content='Login' primary />
              </Form>
            </Grid.Column>

              <Grid.Column verticalAlign='middle'>
              <Link to="/register">
              <Button as={StyledButton} content='Register' icon='signup' size='big' />
              </Link>
             </Grid.Column>
            </Grid>

          <Divider vertical style={{color: 'rgb(165, 212, 239)'}}>Or</Divider>
        </StyledSeg>
        </StyledContainer>
        </>
      )
  }
}
const StyledContainer = styled(Container)`
  display: table;
  text-align: center;
  height: 100% !important;
`;

const StyledSeg = styled(Segment)`
  border-radius: 2px;
  border: 6px;
  display: inline-block;
  padding: 1em !important;
  font-size: 1em !important;
  box-shadow: none !important;
  margin: 3px auto ;
`;

const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2) !important;
  background-color: #f7b1b7 !important;
  color: white !important;
  font-size: 1.4em !important;
  transition: background 0.3s ease;

  &:hover {
    background: #f8c3cd !important;
    transition: background 0.3s ease;
  }
    @media (max-width: 768px) {
    display: block !important;
    margin: 2em auto !important;
    font-size: 1em !important;
  }
`;
export default class ConnectedLogin extends React.Component {
  render() {
    return (
       <AuthConsumer>
         { auth => <Login {...this.props} auth={auth} />}
       </AuthConsumer>
    )
  }
}