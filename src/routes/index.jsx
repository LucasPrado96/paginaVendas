import { createBrowserRouter } from "react-router-dom";
import { Home } from "../containers/home";


export const Routes = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    }
]);