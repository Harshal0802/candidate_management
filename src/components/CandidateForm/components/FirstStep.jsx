import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useRef } from "react";
import context from "../../../context/context";
import "./FirstStep.scss";

const FirstStep = () => {
  const {
    setCurrentStep,
    name,
    setName,
    email,
    setEmail,
    gender,
    setGender,
    setProfile,
    profile,
  } = useContext(context);
  const ref = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setProfile(e.target.files[0]);
    }
  };

  return (
    <div className="form_first_container">
      <div
        className="form_items"
        style={{ cursor: "pointer" }}
        onClick={() => ref.current.click()}
      >
        {profile ? (
          <img src={profile} alt="" className="image" />
        ) : (
          <img
            src="../../../../public/image.png"
            alt="image"
            className="image_size"
          />
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={ref}
          onChange={handleFileChange}
        />
      </div>
      <div className="form_items">
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form_items">
        <TextField
          label="E-mail"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form_items">
        <Box sx={{ width: 150 }}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setCurrentStep(2)}
      >
        Next
      </Button>
    </div>
  );
};

export default FirstStep;
