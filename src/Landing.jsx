import React from "react";
import styled from "styled-components";
import {DefaultButton } from "./components/Button";
import {ButtonRow } from "./components/ButtonRow";
import { IntroBubble } from "./components/IntroBubble";
import { ResumePage } from "./ResumePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = "!!!";

const Background = styled.div`
    background-color: #111222;
    maxWidth: false;
`;

export function Landing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <Background className="container">
                      <IntroBubble></IntroBubble>
                  </Background>                    
                }>  
                </Route>
                <Route exact path="resume" element={
                  <Background className="container">
                    <ResumePage></ResumePage>
                  </Background>
                }>
                </Route>
            </Routes>   
        </BrowserRouter>
    );
}
