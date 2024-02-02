import { useState } from "react";
import CandidateContext from "./context";
import PropTypes from "prop-types";

const CandidateProvider = ({ children }) => {
  const [candidateSelected, setCandidateSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([{ name: "", experience: 0 }]);
  const [education, setEducation] = useState([
    { institute: "", pass_out_year: "" },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "",
      project: "",
      role: "",
      duration_from: "",
      duration_to: "",
    },
  ]);
  return (
    <CandidateContext.Provider
      value={{
        candidateSelected,
        setCandidateSelected,
        currentStep,
        setCurrentStep,
        profile,
        setProfile,
        name,
        setName,
        email,
        setEmail,
        gender,
        setGender,
        education,
        setEducation,
        skills,
        setSkills,
        experience,
        setExperience,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

CandidateProvider.propTypes = {
  children: PropTypes.node,
};

export default CandidateProvider;
