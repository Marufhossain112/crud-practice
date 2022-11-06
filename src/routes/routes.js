import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Pages/addProduct/AddProduct";
export const router = createBrowserRouter([
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  },
]);
