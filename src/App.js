import './App.css';
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Aside from "./Components/Aside/Aside";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Products/>
    },
    {
        path: '/info/:productId',
        element: <Info/>
    },
])

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    );
}

export default App;
