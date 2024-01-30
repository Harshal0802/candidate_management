import CandidateList from "../../components/CandidateList/CandidateList";
import "./Home.scss";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="list">
        <CandidateList />
      </div>
      <div className="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
