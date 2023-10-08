import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [showData, setShowData] = useState({})
    console.log(showData)

    const { id } = useParams();

    const courseData = useLoaderData()
    console.log(courseData)

    useEffect(() => {
        const data = courseData.find(data => data.id == id);
        setShowData(data);
    }, [courseData, id])

    const { image, details, fees_and_funding, how_to_apply, requirement, teacher_img, teacher_name, title } = showData;


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className=""><span className="font-bold">Details : </span>{details}</p>
                        <p className=""><span className="font-bold">Fees and Funding :</span> {fees_and_funding}</p>
                        <p className=""><span className="font-bold">How to Apply :</span> {how_to_apply}</p>
                        <p className=""><span className="font-bold">Requirement :</span> {requirement}</p>
                    </div>
                </div>
            </div>
            <h1 className="text-center font-bold text-5xl">Teacher</h1>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <img src={teacher_img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{teacher_name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;