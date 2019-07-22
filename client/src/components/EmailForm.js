import React from 'react';
import styled from 'styled-components'
import { Form, Icon, TextArea, Button, Container, Header, Segment } from "semantic-ui-react";

class EmailForm extends React.Component {

  render () {
    return(
      <Container text>
        <Segment textAlign='center' style={{ marginTop: '15px'}}>  
        <Header  as='h3' style={{color: 'rgb(165, 212, 239)'}}>
          We Would Love to Hear From You
          </Header>
        <hr />
        <br />
      <Form action="https://formspree.io/willardcron@gmail.com" method="POST">
      <Form.Group>
      <Form.Input
        width='8'
        label="Name:"
        type="text"
        name="username"
        placeholder="Your Name"
        // value={username}
        
        />
        <Form.Input
        width='8'
        label="Email:"
        type="email"
        name="reply to"
        placeholder="Your Email"
        // value={email}
        
        />
      </Form.Group>

      <Form.Input
        
        control={TextArea}
        label='Message:' 
        name="body"
        placeholder='What would you like to tell us...' 
        />

      <Form.Input as={StyledButton} control={Button} type="submit" icon>
        <Icon name='send'/>
        SEND
        </Form.Input>
      </Form>
        </Segment>
    </Container>
      

    )
  }
}

// const StyledHeader = styled(Header) `
//   text-decoration: none;
//   color: #5d6870;`

// const StyledContainer = styled(Container)`
//   display: table;
//   text-align: center;
//   height: 100% !important;
// `;
// const StyledSeg = styled(Segment)`
//   border-radius: 1px !important;
//   border: 2px !important;
//   display: inline-block;
//   background-color: transparent ;
//   padding: 1em !important;
//   font-size: 1em !important;
//   box-shadow: none !important;
//   margin:1em auto !important;
//   align-items: center;
// `;
const StyledButton = styled(Button)`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2) !important;
  background-color: #f7b1b7 !important;
  color: white !important;
  font-size: 1em !important;
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
export default EmailForm;