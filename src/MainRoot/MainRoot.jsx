import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../../src/component/Footer/Footer";

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;