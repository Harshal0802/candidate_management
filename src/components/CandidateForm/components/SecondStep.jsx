import { useContext } from "react";
import context from "../../../context/context";
import { Button, Divider, TextField } from "@mui/material";
import "./SecondStep.scss";

const SecondStep = () => {
  const { setCurrentStep, education, setEducation } = useContext(context);
  const initialEducation = { institute: "", pass_out_year: "" };

  const handleInputChange = (index, field, value) => {
    setEducation((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };

  const handleAddEntry = () => {
    if (education.length < 10) {
      setEducation((prevData) => [...prevData, initialEducation]);
    } else {
      alert("can add up 10 only");
    }
  };

  return (
    <div>
      <div className="form_second_container">
        {education.map((entry, index) => (
          <div key={index}>
            <div className="form_items">
              <TextField
                label="Name of School/College/Institute"
                fullWidth
                value={entry.institute}
                onChange={(e) =>
                  handleInputChange(index, "institute", e.target.value)
                }
              />
            </div>
            <div className="form_items">
              <TextField
                label="Year of Graduation"
                fullWidth
                type="number"
                value={entry.pass_out_year}
                onChange={(e) =>
                  handleInputChange(index, "pass_out_year", e.target.value)
                }
              />
            </div>
            <Divider variant="inset" component="li" />
          </div>
        ))}
        <div className="add_education_btn">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleAddEntry}
          >
            Add Education
          </Button>
        </div>
      </div>

      <div className="button_container">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
