
import StarRating from "./StarRating"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import ReusableModle from "./useresuableModle"
import ShowModel from "./ShowModel"
import Carousel from "./Carousel"
import Counter from "./Counter"
import SortTable from "./SortTable"
import FormValidation from "./FormValidation"



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
                path: "/form",
                element: <FormValidation />
            },

            {
                path: "/sorttable",
                element: <SortTable columnConfiger={[
                    { lable: "Id", key: "id", dataType: "number" },
                    { lable: "Name", key: "name", dataType: "string" },
                    { lable: "Fathername", key: "fathername", dataType: "string" },
                    { lable: "Mothername", key: "mothername", dataType: "string" },
                    { lable: "City", key: "city", dataType: "string" }]}
                    persondata={[
                        { id: 1, name: "renukadevi", fathername: "sankarrao", mothername: "ramanamma", city: "guntur" },
                        { id: 2, name: "bhanuprakash", fathername: "sankarrao", mothername: "ramanamma", city: "guntur" },
                        { id: 3, name: "arachana", fathername: "pondiah", mothername: "nagalashmi", city: "retur" },
                        { id: 4, name: "ramya", fathername: "verabramm", mothername: "krishna", city: "retur" },

                    ]} />
            }
        ]

    }
])
export default AppRouter