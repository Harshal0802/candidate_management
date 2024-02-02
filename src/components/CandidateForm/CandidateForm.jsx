import { useContext } from "react";
import { Stepper, StepLabel, Step } from "@mui/material";
import context from "../../context/context";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import "./CandidateForm.scss";

const CandidateForm = () => {
  const { currentStep } = useContext(context);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
    }
  };
  return (
    <div className="form_container">
      <header className="form_header">
        <h2 className="header_text">New Candidate Form</h2>
        <div className="stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel>Personal Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Education</StepLabel>
            </Step>
            <Step>
              <StepLabel>Skills</StepLabel>
            </Step>
            <Step>
              <StepLabel>Experience</StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        {/* {showStep(4)} */}
      </header>
    </div>
  );
};

export default CandidateForm;
