import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #008B8B;
    color: #FFFFEE;
    border: none;
    border-radius: 5px;
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
    &:hover {
        background-color: #008BAF;
    }
`;

export function DefaultButton(props) {
    return (
        <Button onClick={props.onClick}>
            {props.title}
        </Button>
    );
}
