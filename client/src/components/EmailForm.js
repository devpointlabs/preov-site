import React from 'react';
import styled from 'styled-components'
import { Form, Icon, TextArea, Button, Container, Header } from "semantic-ui-react";

class EmailForm extends React.Component {

  render () {
    return(
      <Container text>
        <StyledHeader as='h3'>We Would Love to Hear From You</StyledHeader>
        <hr />
        <br />
      <Form action="https://formspree.io/willardcron@gmail.com" method="POST">
      <Form.Group>
      <Form.Input
        width={8}
        label="Name:"
         type="text"
          name="username"
           placeholder="Your Name"
        // value={username}
        
        />
        <Form.Input
        width={8}
        label="Email:"
        type="email"
        name="reply to"
        placeholder="Your Email"
        // value={email}
        
        />
      </Form.Group>

      <Form.Input
        width={16}
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

const StyledHeader = styled(Header) `
  text-decoration: none;
  color: #5d6870;`

export default EmailForm;