import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import "./CandidateDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import context from "../../context/context";

const CandidateDetails = () => {
  const {
    setName,
    setEmail,
    setGender,
    setProfile,
    setEducation,
    setSkills,
    setExperience,
  } = useContext(context);
  const [candidateData, setCandidateData] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getCandidateData = async () => {
      const response = await axios.get(
        `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${params.id}`
      );
      setCandidateData(response.data);
    };

    getCandidateData();
  }, [params.id]);

  const handleOnDelete = async () => {
    const response = await axios.delete(
      `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${params.id}`
    );
    console.log("dasdf", response.data);
  };

  const handleOnUpdate = async () => {
    const response = await axios.put(
      `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${params.id}`
    );
    const result = response.data;
    setName(result.name);
    setEmail(result.email);
    setGender(result.gender);
    setSkills(result.skills);
    setEducation(result.education);
    setExperience(result.experience);
    navigate(`/candidate/new/${params.id}`);
  };

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <div>
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
            variant="none"
          >
            <Avatar
              alt={candidateData.name}
              src={candidateData.profile_picture}
              sx={{ width: 150, height: 150, background: "contain" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "100px",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h4">
                  {candidateData.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  {candidateData.email}
                </Typography>
                <Typography variant="body2">{candidateData.gender}</Typography>
                <Typography variant="body2">{candidateData.company}</Typography>
              </CardContent>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                sx={{ marginBottom: "15px" }}
                onClick={handleOnUpdate}
              >
                Edit Candidate
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleOnDelete}
              >
                Delete Candidate
              </Button>
            </Box>
          </Card>
        </div>

        <Card variant="none">
          <CardContent>
            <h2>Education:</h2>
            <ul>
              {candidateData?.education?.map((edu, index) => (
                <li key={index}>
                  {edu.institute}
                  (Pass out year: {edu.pass_out_year})
                </li>
              ))}
            </ul>

            <h2>Skills:</h2>
            <ul>
              {candidateData?.skills?.map((skill, index) => (
                <li key={index}>
                  <h3>{skill.name}</h3> No of experience: {skill.experience}
                </li>
              ))}
            </ul>

            <h2>Experience:</h2>
            <ul>
              {candidateData?.experience?.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.company}</strong> on the project {exp.project}{" "}
                  <strong>{exp.role}</strong> ({exp.duration_from} -{" "}
                  {exp.duration_to}), Team Size: {exp.team_size}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CandidateDetails;
