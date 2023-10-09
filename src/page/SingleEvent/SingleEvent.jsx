import PropTypes from 'prop-types';

const SingleEvent = ({ singleData }) => {

    const { event_name, date, location, description, organizer } = singleData

    return (
        <div className="bg-slate-300 p-10 m-5 rounded-lg">
            <h1><span className='font-bold'>Event Name : </span>{event_name}</h1>
            <p><span className='font-bold'>Date : </span>{date}</p>
            <p><span className='font-bold'>Location : </span>{location}</p>
            <p><span className='font-bold'>Description : </span>{description}</p>
            <p><span className='font-bold'>Organizer : </span>{organizer}</p>
        </div>
    );
};

SingleEvent.propTypes = {
    singleData: PropTypes.object
}

export default SingleEvent;