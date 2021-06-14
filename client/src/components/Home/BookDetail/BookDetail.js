import { deleteBook } from '../../../actions/book';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';

/**
 * Book Detail Component
 * @param {object} param0 
 * @returns JSX
 */
const BookDetail = ({ title, author, created_date, publisher, id }) => {
    
    const history = useHistory();

    const dispatch = useDispatch();

    const renderDelete = (e) => {
        e.preventDefault();
        dispatch(deleteBook(id))
    };
    
    const renderUpdate = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/form',
            state: { updateFormData: { _id: id, title, author, created_at: created_date, publisher }}
        });
    }

    return (
        <div className="text-center relative p-5 bg-blue-400 text-blue-900">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p>Author: {author}</p>
            <p>Created Date: <Moment format="YYYY/MM/DD">{created_date}</Moment></p>
            <p>Publisher: {publisher}</p>
            <div className="opacity-0 hover:opacity-100 transition absolute top-0 left-0 p-5 w-full h-full bg-blue-200 flex justify-center items-center">
                <div className="p-3 flex justify-between">
                    <a href="#" className="p-5 rounded bg-blue-500 mr-3" onClick={renderDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </a>
                    <a href="#" className="p-5 rounded bg-blue-500" onClick={renderUpdate}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </a>
                </div>
                
            </div>
        </div>
    );

};

export default BookDetail;
