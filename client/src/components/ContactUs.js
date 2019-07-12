import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap,} from 'react-google-maps';
import EmailForm from "./EmailForm";
import styled from "styled-components";
import MapStyles from "./MapStyles";

function Map(){
  return(
    <GoogleMap 
    defaultZoom={12}
    defaultCenter={{ lat: 40.7719, lng: -111.8370 }}
    defaultOptions={{ styles: MapStyles }}

    />
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

const StyledLeftDiv = styled.div`
  width: 50%;
  float: left;
  padding: 1em 1em 1em 2em;
`;

const StyledRightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 !important;
`;

export default function ContactUs(){
  return  (
      <>
    <StyledLeftDiv>
    <table className="ui table">
  <tbody>
    <tr>
      <td className="collapsing">
        <i className="phone icon"></i> phone
      </td>
      <td>00000-0000-000000</td>
  
    </tr>
    <tr>
      <td>
        <i className="home icon"></i>location
      </td>
      <td>addressssssssssss</td>
  
    </tr>
    <tr>
      <td>
        <i className="computer icon"></i> email
      </td>
      <td>faker fake fake</td>
  
    </tr>
  </tbody>
</table>
      < EmailForm />
    </StyledLeftDiv>
    
    <StyledRightDiv>
      <div style={{ width: "60vw", height: "80vh", }}>
      <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
          libraries=geometry,drawing,places&key=AIzaSyBlhCtxXLRDH1kdqfNQTBZuB8YF3OJWUP8`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          /> 
      </div>
    </StyledRightDiv>
    </>
    
  );
}