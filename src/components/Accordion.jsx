import React, {useState} from "react";
import styled from "styled-components";
import { Rotate as Hamburger } from 'hamburger-react'

const AccordionHeader = styled.div`
  background-color: #008B8B;
  color: #FFFFEE;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  margin: 0.2em;
  &:hover {
    background-color: #008BAF;
  }
`;

const AccordionExpansion = styled.div`
  background-color: #FFFFFF;
  border-radius: 25px;
  display: flex;
  margin-top: 0.5em;
  justify-content: space-between;
`;

const ContentStyling = styled.div`
  padding: 0.2em;
`;

export function AccordionComponent(props) {
    const [expanded, setExpanded] = useState(false);
    const extended = () => {
      return (
          <AccordionExpansion>
            <ContentStyling>
              {props.content}
            </ContentStyling>
          </AccordionExpansion>
      );
    };
    return (
      <>
        <AccordionHeader onClick={() => setExpanded(!expanded)} className="row">
          <Hamburger toggled={expanded}></Hamburger>
          <div className="col">
            <h5>
              {props?.title}
            </h5>
            <h6>
              {props?.subtitle}
            </h6>
          </div>
        </AccordionHeader>
        {expanded && extended()}
        <br></br>
      </>
    );

}
