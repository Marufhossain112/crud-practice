import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Pages/addProduct/AddProduct";
import ManageProduct from "../Pages/manageProduct/ManageProduct";
export const router = createBrowserRouter([
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/informs",
    element: <ManageProduct></ManageProduct>,
    loader: () => fetch("http://localhost:5000/informs"),
  },
]);
