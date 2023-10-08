import PropTypes from 'prop-types';


const Courses = ({ singleData }) => {

    const { image, details, fees_and_funding, how_to_apply, requirement, teacher_img, teacher_name, title } = singleData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-full h-64" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : {fees_and_funding}</p>
                    <p className='text-justify'>{details.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Courses.propTypes = {
    singleData: PropTypes.object,
}

export default Courses;