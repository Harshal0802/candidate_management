import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandidateForm from "./components/CandidateForm/CandidateForm";
// import Login from "./pages/Login/Login";
import CandidateDetails from "./components/CandidateDetails/CandidateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <CandidateDetails />,
      },
      {
        path: "/candidate/new",
        element: <CandidateForm />,
      },
      {
        path: "candidate/:id",
        element: <CandidateForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
