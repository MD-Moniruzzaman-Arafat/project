import PropTypes from 'prop-types';

const SingleBlog = ({ singleData }) => {
    const { title, author, date, content } = singleData;
    return (
        <div className="bg-slate-300 p-10 m-5 rounded-lg">
            <h1><span className='font-bold'>Title :</span> {title}</h1>
            <p><span className='font-bold'>Author :</span> {author}</p>
            <p><span className='font-bold'>Date :</span> {date}</p>
            <p><span className='font-bold'>Content :</span> {content}</p>
        </div>
    );
};

SingleBlog.propTypes = {
    singleData: PropTypes.object
}

export default SingleBlog;