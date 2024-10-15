
import StarRating from "./StarRating"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import ReusableModle from "./useresuableModle"
import ShowModel from "./ShowModel"
import Carousel from "./Carousel"
import Counter from "./Counter"
import SortTable from "./SortTable"


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
            },
            {
                path: "/counter",
                element: <Counter />
            },
            {
                path: "/sorttable",
                element: <SortTable columnConfiger={[
                    { lable: "Name", key: "name" },
                    { lable: "Fathername", key: "fathername" },
                    { lable: "Mothername", key: "mothername" },
                    { lable: "City", key: "city" }]}
                    persondata={[
                        { name: "renukadevi", fathername: "sankarrao", mothername: "ramanamma" },
                        { name: "bhanuprakash", fathername: "sankarrao", mothername: "ramanamma" },
                        { name: "arachana", fathername: "pondiah", mothername: "nagalashmi" },
                        { name: "ramya", fathername: "verabramm", mothername: "krishna" },

                    ]} />
            }
        ]

    }
])
export default AppRouter