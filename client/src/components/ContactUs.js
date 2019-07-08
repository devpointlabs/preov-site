import React from 'react';
import EmailForm from "./EmailForm";
import { Segment, Header } from "semantic-ui-react";

const ContactUs = () => {

    return(
      <>
      <Segment>
        <Header>GET IN TOUCH </Header>
        <div>CONTACT</div>
        <div> MAP of LOCATION </div>
        <div>MAM</div>
        <hr />
        < EmailForm />
      </Segment>
      </>
    )
};

export default ContactUs;