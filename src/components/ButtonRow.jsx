import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {DefaultButton } from "./Button";
import { redirectToGithub, redirectToLinkedIn, redirectToResume } from "./Utils";

export function ButtonRow() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <DefaultButton title="Github" onClick={redirectToGithub}></DefaultButton>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <DefaultButton title="LinkedIn" onClick={redirectToLinkedIn}></DefaultButton>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <DefaultButton title="Resume" onClick={redirectToResume}></DefaultButton>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <DefaultButton title="??" onClick={null}></DefaultButton>
            </div>
        </div>
    );
}
