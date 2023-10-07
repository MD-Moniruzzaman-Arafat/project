import Slider from "../../component/Slider/Slider";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="w-10/12 mx-auto">
                <About></About>
            </div>
        </div>
    );
};

export default Home;