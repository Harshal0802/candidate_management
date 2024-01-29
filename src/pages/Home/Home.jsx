import CandidateDetails from "../../components/CandidateDetails/CandidateDetails";
import CandidateList from "../../components/CandidateList/CandidateList";
import "./Home.scss";


const Home = () => {
  
  return (
    <div className="container">
      <div className="list">
        <CandidateList />
      </div>
      <div className="details">
        <CandidateDetails />
      </div>
    </div>
  );
};

export default Home;
