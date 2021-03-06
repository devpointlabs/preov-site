import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker,} from 'react-google-maps';
import EmailForm from "./EmailForm";
import styled from "styled-components";
import MapStyles from "./MapStyles";

function Map(){

  return(
    <>
    <GoogleMap 
    defaultZoom={13}
    defaultCenter={{ lat: 40.7619, lng: -111.8570 }}
    defaultOptions={{ styles: MapStyles }}
    />
   <Marker
   position = {{ lat: 40.7643925, lng: -111.8450127}}
   
   >
   </Marker>
    </>
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
`;

export default function ContactUs(){
  
  return  (
      <>
    <StyledLeftDiv>
    <table className="ui table">
  <tbody>
    <tr>
      <td>
        <i className="building icon"></i>
      </td>
      <td>50 N Medical Dr.
        <br />
         Salt Lake City, UT 
         <br />
         84132</td>
    </tr>
    <tr>
      <td className="collapsing">
        <i className="phone icon"></i>
      </td>
      <td>(801) 581-2121 </td>
  
    </tr>
  
    <tr>
      <td>
        <i className="mail icon"></i>
      </td>
      <td>dplpreov@gmail.com</td>
  
    </tr>
  </tbody>
</table>
<br />
      < EmailForm />
    </StyledLeftDiv>
    
    <StyledRightDiv>
      <div style={{ width: "60vw", height: "94.5vh", marginTop: "20px", marginBottom: "10px", marginRight: "2em"}}>
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