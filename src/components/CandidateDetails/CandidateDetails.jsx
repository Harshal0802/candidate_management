import { useState, useContext, useEffect } from "react";
import axios from "axios";
import context from "../../context/context";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import "./CandidateDetails.scss";

const CandidateDetails = () => {
  const { candidateId, candidateSelected } = useContext(context);
  const [candidateData, setCandidateData] = useState({});

  useEffect(() => {
    const getCandidateData = async () => {
      const response = await axios.get(
        `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${candidateId}`
      );
      setCandidateData(response.data);
    };
    if (candidateSelected) {
      getCandidateData();
    }
  }, [candidateSelected, candidateId]);
  console.log(candidateData);
  return (
    <>
      <Typography variant="h4" sx={{ margin: "30px 30px 5px 30px" }}>
        Candidate Details
      </Typography>
      <Box sx={{ minWidth: 275 }}>
        {candidateSelected ? (
          <>
            <div>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "40%",
                }}
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
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      {candidateData.email}
                    </Typography>
                    <Typography variant="body2">
                      {candidateData.gender}
                    </Typography>
                    <Typography variant="body2">
                      {candidateData.company}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
            <Card variant="outlined">
              <CardContent>
                <h2>Hobbies:</h2>
                <ul>
                  {candidateData?.hobbies?.map((hobby, index) => (
                    <li key={index}>
                      <Typography variant="h6">{hobby}</Typography>
                    </li>
                  ))}
                </ul>

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
                      at {exp.company} on the project
                      {exp.project} <strong>{exp.role}</strong> (
                      {exp.duration_from} - {exp.duration_to}), Team Size:{" "}
                      {exp.team_size}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </>
        ) : (
          <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
            No Candidate Selected
          </Typography>
        )}
      </Box>
    </>
  );
};

export default CandidateDetails;
