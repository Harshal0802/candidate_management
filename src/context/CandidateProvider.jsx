import { useState } from "react";
import CandidateContext from "./context";
import PropTypes from "prop-types";

const CandidateProvider = ({ children }) => {
  const [candidateId, setCandidateId] = useState(0);
  const [candidateSelected, setCandidateSelected] = useState(false);
  return (
    <CandidateContext.Provider
      value={{
        candidateId,
        setCandidateId,
        candidateSelected,
        setCandidateSelected,
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
