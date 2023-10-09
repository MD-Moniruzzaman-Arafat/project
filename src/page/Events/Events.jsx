import { useLoaderData } from "react-router-dom";
import SingleEvent from "../SingleEvent/SingleEvent";

const Events = () => {
    const eventData = useLoaderData()
    console.log(eventData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                eventData.map((singleData, idx) => <SingleEvent key={idx} singleData={singleData}></SingleEvent>)
            }
        </div>
    );
};

export default Events;