import "./CandidateList.scss";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import context from "../../context/context";

const CandidateList = () => {
  const { setCandidateId, setCandidateSelected } = useContext(context);
  const [list, setList] = useState([]);

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
      <Typography variant="h4" sx={{ margin: "30px 30px 5px 30px" }}>
        Candidate List
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {list?.map((ele) => {
          return (
            <>
              <Button
                variant="text"
                sx={{ width: "100%" }}
                onClick={() => {
                  setCandidateId(ele.id);
                  setCandidateSelected(true);
                }}
                key={ele.id}
              >
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt={ele.name} src={ele.profile_picture} />
                  </ListItemAvatar>
                  <ListItemText primary={ele.name} />
                </ListItem>
              </Button>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

export default CandidateList;
