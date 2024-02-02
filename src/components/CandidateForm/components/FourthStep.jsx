import { useContext } from "react";
import context from "../../../context/context";
import { Button, TextField } from "@mui/material";
import "./FourthStep.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FourthStep = () => {
  const navigate = useNavigate();
  const {
    setCurrentStep,
    experience,
    setExperience,
    email,
    gender,
    education,
    skills,
    name,
    profile,
  } = useContext(context);
  const initialExperience = {
    company: "",
    project: "",
    role: "",
    duration_from: "",
    duration_to: "",
  };

  const handleOnSubmit = async () => {
    const response = await axios.post(
      "https://60d5a2c2943aa60017768b01.mockapi.io/candidate",
      {
        profile_picture: URL.createObjectURL(profile),
        name: name,
        email: email,
        gender: gender,
        education: education,
        skills: skills,
        experience: experience,
      }
    );
    const result = response.data;
    navigate(`/candidate/${result.id}`);
  };

  const handleInputChange = (index, field, value) => {
    setExperience((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };

  const handleAddEntry = () => {
    if (experience.length < 10) {
      setExperience((prevData) => [...prevData, initialExperience]);
    } else {
      alert("can add up 10 only");
    }
  };

  return (
    <div>
      <div className="form_fourth_container">
        {experience.map((entry, index) => (
          <div key={index}>
            <div className="form_items">
              <TextField
                label="Company Name"
                fullWidth
                value={entry.company}
                onChange={(e) =>
                  handleInputChange(index, "company", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Project Name"
                fullWidth
                value={entry.project}
                onChange={(e) =>
                  handleInputChange(index, "project", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Role"
                fullWidth
                value={entry.role}
                onChange={(e) =>
                  handleInputChange(index, "role", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Duration From"
                fullWidth
                type="month"
                value={entry.duration_from}
                onChange={(e) =>
                  handleInputChange(index, "duration_from", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Duration To"
                fullWidth
                type="month"
                value={entry.duration_to}
                onChange={(e) =>
                  handleInputChange(index, "duration_to", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <div className="add_experience_btn">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleAddEntry}
          >
            Add Experience
          </Button>
        </div>
      </div>
      <div className="button_container">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(3)}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FourthStep;
