
import StarRating from "./StarRating"
import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import ReusableModle from "./useresuableModle"
import ShowModel from "./ShowModel"
import Carousel from "./Carousel"
import Counter from "./Counter"
import SortTable from "./SortTable"
import FormValidation from "./FormValidation"
import ShoppingCart from "./ShoppingCart"
import Cart from './Cart.js'
import InfinityLoading from "./infinitydata/InfinityLoading.js"

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
                path: "/infinityloading",
                element: <InfinityLoading />
            },
            {
                path: "/shop",
                element: <ShoppingCart />
            },
            {
                path: '/cartItem',
                element: <Cart />
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
                        { id: 5, name: "renukadevi", fathername: "ramarao", mothername: "ramanamma", city: "guntur" },

                    ]} />
            }
        ]

    }
])
export default AppRouter