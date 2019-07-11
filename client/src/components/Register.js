import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

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
      <Segment basic>
        <Header as='h1' textAlign='center'> R E G I S T E R </Header>
        <Form align='center' onSubmit={this.handleSubmit}>
        <Form.Group >
        <Form.Input
            width='5'
            label="FirstName"
            required
            autoFocus
            name='firstname'
            value={firstname}
            placeholder='FirstName'
            onChange={this.handleChange}
            />
          <Form.Input
            width='5'
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
            width='10'
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
            width='5'
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
          <Form.Input
            width='5'
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
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
        
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}