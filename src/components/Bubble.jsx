import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
    background-color: #FFFFFF;
    margin-bottom: 3rem;
    border-radius: 25px;
`;

export function BubbleComponent(props) {
    return (
        <Bubble className="row">
            {props.content}
        </Bubble>
    );
}
