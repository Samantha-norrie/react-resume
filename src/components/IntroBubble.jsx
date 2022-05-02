import React from "react";
import styled from "styled-components";
import { BubbleComponent } from "./Bubble";
import {ButtonRow} from "./ButtonRow";

const BubbleContainer = styled.div`
    padding: 10rem; 
`;

export function IntroBubble() {
    return(
        <BubbleContainer className="col">
            <BubbleComponent content={
                <>
                    <div className="col-md-4 col-sm-12">
                    <h4>
                        !!!
                    </h4>
                    </div>
                <div className="col-md-8 col-sm-12">
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                </>
            }>
            </BubbleComponent>
            <ButtonRow></ButtonRow>
        </BubbleContainer>
    );
}
