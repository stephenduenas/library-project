import { useState } from 'react';
import FormGroup from '../Base/FormGroup';
import { addBook, updateBook } from '../../actions/book';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { mapObjectToArray } from '../../helper';

/**
 * Form (Update / Create) Component
 * @returns JSX
 */
const Form = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    let isUpdateModule = false;
    let initialState = {
        title: '',
        author: '',
        publisher: '',
    }

    if (location.state !== undefined && "updateFormData" in location.state) {
        initialState = location.state.updateFormData
        isUpdateModule = true;
    }
    const MODULE = isUpdateModule ? 'Update' : 'Create';
    const [ form, setForm ] = useState(initialState);

    const renderChange = (value, name) => {
        setForm({...form, [name]: value});
    };

    const isFormEmpty = () => {
        return mapObjectToArray(form).some(param => (!param || /^\s*$/.test(param)));
    };

    const renderSubmit = e => {
        e.preventDefault();
        if(isFormEmpty()) {
            const ERROR_MESSAGE = 'Input fields must not be empty.'
            return alert(ERROR_MESSAGE);
        }
        isUpdateModule ? dispatch(updateBook(form)) : dispatch(addBook(form));
        history.push('/');
    }

    return (
        <div className="bg-blue-100">
            <div className="container mx-auto">
                <form action="POST" onSubmit={renderSubmit}>
                    <div className="bg-blue-400 p-5 text-blue-900">
                        <h1 className="text-2xl text-center">{MODULE} Book</h1>
                        <FormGroup renderChange={renderChange} name="title" value={form.title}></FormGroup>
                        <FormGroup renderChange={renderChange} name="author" value={form.author}></FormGroup>
                        <FormGroup renderChange={renderChange} name="publisher" value={form.publisher}></FormGroup>
                        <div className="flex justify-center mt-5 ">
                            <button className="mr-5 px-10 py-3 bg-blue-800 hover:bg-blue-900 transition text-blue-100" type="submit">{MODULE} book</button>
                            <a href="#" className="px-10 py-3 bg-yellow-800 hover:bg-yellow-900 transition text-blue-100" onClick={e => {
                                e.preventDefault();
                                history.push('/');
                            }}>Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Form;
