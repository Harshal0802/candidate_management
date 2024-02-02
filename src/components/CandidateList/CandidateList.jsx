import "./CandidateList.scss";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import context from "../../context/context";
import { useNavigate } from "react-router-dom";

const CandidateList = () => {
  const {setCandidateSelected } = useContext(context);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(
        "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
      );
      const result = response.data;
      setList(result);
    };

    getList();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ margin: "30px 30px 5px 30px" }}>
          Candidate List
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "30px" }}
          onClick={() => navigate("/candidate/new")}
        >
          Add Candidate
        </Button>
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        {list?.map((ele) => {
          return (
            <div key={ele.id}>
              <Button
                variant="text"
                sx={{ width: "100%" }}
                onClick={() => {
                  setCandidateSelected(true);
                  navigate(`/candidate/${ele.id}`);
                }}
              >
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt={ele.name} src={ele.profile_picture} />
                  </ListItemAvatar>
                  <ListItemText primary={ele.name} />
                </ListItem>
              </Button>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>
    </>
  );
};

export default CandidateList;
