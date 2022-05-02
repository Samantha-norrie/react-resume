import React from "react";
import styled from "styled-components";
import { BubbleComponent } from "./Bubble";

const Text = styled.p`
    display: inline;
`;
const ContentStyling = styled.div`
    display: inline;
`;

export function EducationBubbleComponent(props) {
    return(
        <BubbleComponent content={
            <ContentStyling>
                <Text>{props.major}</Text>
                <Text>{props.years}</Text>
            </ContentStyling>       
        }>
        </BubbleComponent>
    )
}
