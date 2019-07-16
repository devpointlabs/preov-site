import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import styled from "styled-components";
import { Button, Form, Segment, Header, Container } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state
    const { auth: { handleRegister, }, history, } =this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const {name, value, } = e.target;
    this.setState({[name]: value,});
  }

  render() {
    const { firstname, lastname, email, password, passwordConfirmation, } = this.state;

    return ( 
      <>
      <StyledContainer >
        <StyledSeg>

      <Header as='h1' textAlign='center' style={{color: 'rgb(165, 212, 239)'}}> R E G I S T E R </Header>
        <Form align='center' onSubmit={this.handleSubmit}>
        <Form.Group >
        <Form.Input
            label="FirstName"
            required
            autoFocus
            name='firstname'
            value={firstname}
            placeholder='FirstName'
            onChange={this.handleChange}
            />
          <Form.Input
            label="LastName"
            required
            autoFocus
            name='lastname'
            value={lastname}
            placeholder='LastName'
            onChange={this.handleChange}
            />
          </Form.Group>
        <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
            />
          <Form.Group>

          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
            />

            </Form.Group>
          <Segment textAlign='center' basic>
            <Button as={StyledButton} primary>Submit</Button>
          </Segment>
          </Form>
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
  border-radius: 1px !important;
  border: 2px !important;
  display: inline-block;
  background-color: rgb(165, 212, 239);
  padding: 1em !important;
  font-size: 1em !important;
  box-shadow: none !important;
  margin:1em auto !important;
  align-items: center;
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

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}