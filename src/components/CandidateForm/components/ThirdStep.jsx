import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import context from "../../../context/context";
import "./ThirdStep.scss";

const ThirdStep = () => {
  const { setCurrentStep, skills, setSkills } = useContext(context);
  const initialSkills = { name: "", experience: "" };

  const handleInputChange = (index, field, value) => {
    setSkills((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };

  const handleAddEntry = () => {
    if (skills.length < 10) {
      setSkills((prevData) => [...prevData, initialSkills]);
    } else {
      alert("can add up 10 only");
    }
  };

  return (
    <div>
      <div className="form_third_container">
        {skills.map((entry, index) => (
          <div key={index}>
            <div className="form_items">
              <TextField
                label="Name of Skill"
                fullWidth
                value={entry.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Experience"
                fullWidth
                type="number"
                value={entry.experience}
                onChange={(e) =>
                  handleInputChange(index, "experience", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <div className="add_skill_btn">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleAddEntry}
          >
            Add Skill
          </Button>
        </div>
      </div>
      <div className="button_container">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(2)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(4)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
