import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

import HeaderNavBar from "../Pages/Items/HeaderNavBar";
import { AboutMe } from "../Pages/AboutMe/AboutMe";
import { SurveyPage } from "../Pages/SurveyPage/SurveyPage.";
import ResultPage from "../Pages/SurveyPage/partials/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNavBar />, 
    children: [
     {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/surveypage",
        element: <SurveyPage />,
      },
      {
        path: "/resultpage",
        element: <ResultPage />,
      },

    ],
  },
]);
