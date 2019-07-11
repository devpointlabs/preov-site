import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

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
        <Segment>
          <Header as='h1' textAlign='center'> L O G I N </Header>
          <Form Align = 'center' onSubmit={this.handleSubmit}>
            <Form.Input
            width='10'
            label="Email"
            autoFocus
            required
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
            />
            <Form.Input
            width='10'
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
            <Segment textAlign= 'center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
       <AuthConsumer>
         { auth => <Login {...this.props} auth={auth} />}
       </AuthConsumer>
    )
  }
}