import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./views/layout";
import { TourneyLayout } from "./views/tourney/layout";
import { TourneyListView } from "./views/tourney/tourney-list";
import { TourneyCreateView } from "./views/tourney/tourney-create";
import { TourneyDetailsView } from "./views/tourney/tourney-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    handle: { crumb: "Home" },
    children: [
      {
        path: "tourneys",
        element: <TourneyLayout />,
        handle: { crumb: "Tourneys" },
        children: [
          { index: true, element: <TourneyListView /> },
          { path: "create", element: <TourneyCreateView /> },
          {
            path: ":tourneyId",
            element: <TourneyDetailsView />,
            handle: { crumb: "Tourney Details" },
          },
        ],
      },
    ],
  },
]);
