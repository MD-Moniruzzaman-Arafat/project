import PropTypes from 'prop-types';

const Teacher = ({ singleData }) => {
    const { teacher_img, teacher_name } = singleData;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure><img src={teacher_img} alt="Shoes" className="w-full h-64" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{teacher_name}</h2>

                </div>
            </div >
        </div >
    );
};

Teacher.propTypes = {
    singleData: PropTypes.object,
}

export default Teacher;