import React, { useState} from "react";
import styled from "styled-components";
import { AccordionComponent } from "./components/Accordion";
import { AUTOMATED_TESTING_AND_DEVOPS_TOOLS, FRONTEND, JOB_HISTORY, PROGRAMMING_LANGUAGES, UVIC_BIOL_HINF_CLASSES, UVIC_CSC_SENG_CLASSES, MCGILL_COMP_CLASSES} from "./components/Content";
import { EducationBubbleComponent } from "./components/EducationBubble";



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const ResumePageStyling = styled.div`
  // display: flex;
  // justify-content: center;
`;
const Title = styled.h1`
  color: #FFFFFF;
`;
const SectionTitle = styled.h2`
  color: #FFFFFF;
`;

const SubSectionTitle = styled.h4`
  color: #FFFFFF;
`;

const Point = styled.p`
  border: none;
  margin: 0.15rem;
`;

export function ResumePage() {

    const jobHistoryAccordions = (jobHistoryArray) => {
      return (
        <>
          {jobHistoryArray.map((job, index) => {
            return(
              <AccordionComponent 
                title={job.jobTitle} 
                subtitle={job.company} 
                content={
                  <>
                    {job.content.map((content, index) => {
                      return(
                        <Point>- {content}</Point>
                      );
                    })}
                  </>
                }
                >
              </AccordionComponent>
            );
                  })}
        </>
      );
    };

    const technicalSkillsContent = (skillArray) => {
      return (
        <div className="col">
          {skillArray.map((skill, index) =>{
            return(
              <div className="row">
                <Point>- {skill} </Point>
              </div>
            );
          })}
        </div>      
      );
    };

    const classContent = (classArray) => {
      return (
        <div className="col">
          {classArray.map((classObject, index) => {
            return(
              <div className="row">
                <div className="col-8">
                  <Point>{classObject.name} ({classObject.code})</Point>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <Point>{classObject.grade}</Point>
                </div>
              </div>
            );

          })}
        </div>
      );
    };

    return (
      <ResumePageStyling>
        <div className="row">
          <Title>Resume</Title>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <SectionTitle>Job History</SectionTitle>
            {
              jobHistoryAccordions(JOB_HISTORY)
            }
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <AccordionComponent title="Programming Languages" content={technicalSkillsContent(PROGRAMMING_LANGUAGES)} className="col-2"></AccordionComponent>
              </div>
              <div className="col-md-12 col-lg-4">
              <AccordionComponent title="Front-end Frameworks and Libraries" content={technicalSkillsContent(FRONTEND)} className="col-2"></AccordionComponent>
              </div>
              <div className="col-md-12 col-lg-4">
              <AccordionComponent title="Automated Testing and DevOps Tools" content={technicalSkillsContent(AUTOMATED_TESTING_AND_DEVOPS_TOOLS)} className="col-2"></AccordionComponent>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <SectionTitle>Education</SectionTitle>
              <SubSectionTitle>University of Victoria</SubSectionTitle>
              <div className="row">
                <EducationBubbleComponent major="Computer Science, BSc" years="2019-2023"></EducationBubbleComponent>
                <div className="col-md-6 col-sm-12">
                  <AccordionComponent title="Relevant Courses" subtitle="Computer Science and Software Engineering" content={classContent(UVIC_CSC_SENG_CLASSES)}></AccordionComponent>
                </div>
                <div className="col-md-6 col-sm-12">
                <AccordionComponent title="Relevant Courses" subtitle="Biology and Health Informatics" content={classContent(UVIC_BIOL_HINF_CLASSES)}></AccordionComponent>
                </div>
              </div>
              <SubSectionTitle>McGill University</SubSectionTitle>
              <EducationBubbleComponent major="Chemical Engineering, BSc" years="2018-2019"></EducationBubbleComponent>
              <AccordionComponent title="Relevant Courses" subtitle="Computer Science" content={classContent(MCGILL_COMP_CLASSES)}></AccordionComponent>
          </div>
        </div>
      </ResumePageStyling>
    );
}
