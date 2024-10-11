
import StarRating from "./StarRating"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import ReusableModle from "./useresuableModle"
import ShowModel from "./ShowModel"
import Carousel from "./Carousel"


const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <StarRating />
            },
            {
                path: "/showmodel",
                element: <ShowModel />
            },
            {
                path: "/carousel",
                element: <Carousel />
            }
        ]

    }
])
export default AppRouter