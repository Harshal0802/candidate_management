import CandidateList from "../../components/CandidateList/CandidateList";
import "./Home.scss";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="list">
          <CandidateList />
        </div>
        <div className="details">
          <Typography variant="h3" sx={{ margin: "30px 30px 25px 30px" }}>
            Candidate Details
          </Typography>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
