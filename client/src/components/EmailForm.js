import React from 'react';
import { Form, Icon, TextArea, Button, Container, Header } from "semantic-ui-react";

class EmailForm extends React.Component {

  render () {
    return(
      <Container margin="50">
        <Header as='h3'>We Would Love to Hear From You</Header>
        <br />
        <br />
      <Form action="https://formspree.io/willardcron@gmail.com" method="POST">
      <Form.Group>
      <Form.Input
        width={3}
        label="Name:"
         type="text"
          name="username"
           placeholder="Your Name"
        // value={username}
        
        />
        <Form.Input
        width={7}
        label="Email:"
        type="email"
        name="reply to"
        placeholder="Your Email"
        // value={email}
        
        />
      </Form.Group>

      <Form.Input
        width={10}
        control={TextArea}
        label='Message:' 
        name="body"
        placeholder='What would you like to tell us...' 
        />

      <Form.Input control={Button} type="submit" icon>
        <Icon name='send'/>
        SEND
        </Form.Input>
      </Form>
    </Container>
      

    )
  }
}

export default EmailForm;