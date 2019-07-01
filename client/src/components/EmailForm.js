import React from 'react';
import { Form, Icon, } from "semantic-ui-react";

class EmailForm extends React.Component {

  render () {
    return(
      <Form action="https://formspree.io/email@domain.tld" method="POST">
      <Form.Group>
      <Form.Input
        label="UserName"
        type="text"
        name="username"
        // value={username}
        width={4}
        />
        <Form.Input
        label="Email"
        type="email"
        name="_replyto"
        // value={email}
        width={8}
        />
      <Form.Input type="submit" value="Send"/>
      </Form.Group>
    </Form>

    )
  }
}

export default EmailForm;