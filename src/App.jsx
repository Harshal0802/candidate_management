import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandidateForm from "./components/CandidateForm/CandidateForm";
import CandidateDetails from "./components/CandidateDetails/CandidateDetails";
import NoCandidateSelect from "./components/NoCandidateSelect.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <NoCandidateSelect />,
      },
      {
        path: "/candidate/:id",
        element: <CandidateDetails />,
      },
      {
        path: "/candidate/new",
        element: <CandidateForm />,
      },
      {
        path: "/candidate/new/:id",
        element: <CandidateForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
