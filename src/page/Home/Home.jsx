import { ToastContainer } from "react-toastify";
import Slider from "../../component/Slider/Slider";
import Teacher from "../../component/Teacher/Teacher";
import About from "../About/About";
import Courses from "../Courses/Courses";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const coursesData = useLoaderData()

    return (
        <div>
            <ToastContainer></ToastContainer>
            <Slider></Slider>
            <About></About>

            <div className="w-10/12 mx-auto space-y-10">
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold">Our Courses</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {
                            coursesData.map(singleData => <Courses key={singleData.id} singleData={singleData}></Courses>)
                        }
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold">Our Teacher</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {
                            coursesData.map(singleData => <Teacher key={singleData.id} singleData={singleData}></Teacher>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;