import { useState, useEffect } from 'react';
import BookDetail from "./BookDetail/BookDetail";
import Search from "./Search/Search";
import { useSelector, useDispatch } from 'react-redux';
import { mapObjectToArray } from '../../helper';
import { BOOK_CATEGORIES } from '../../constants/book-categories';
import { listBooks } from '../../actions/book';
import moment from 'moment';

/**
 * Home Component
 * @returns JSX
 */
const Home =  () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listBooks());
    }, []);

    const books = useSelector((state) => mapObjectToArray(state.books));

    const [ search, setSearch ] = useState({
        category: BOOK_CATEGORIES.title,
        keyword: ''
    });

    const isKeywordIncluded = (haystack, needle) => haystack.toLowerCase().indexOf(needle.toLowerCase()) != -1;
    
    const filterBooks = () => {
        if (search.keyword === '') {
            return books.map(({_id, title, author, created_at, publisher}) => <BookDetail key={_id} id={_id} title={title} author={author} created_date={created_at} publisher={publisher} ></BookDetail>);
        }
        const FILTERED_BOOKS = books.filter((book) => {
            if (search.category === BOOK_CATEGORIES.created_date) {
                return isKeywordIncluded(moment(book[BOOK_CATEGORIES[search.category]]).format('YYYY/MM/DD'), search.keyword);
            }
            return isKeywordIncluded(book[BOOK_CATEGORIES[search.category]], search.keyword);
        });
        return FILTERED_BOOKS.map(({_id, title, author, created_at, publisher}) => <BookDetail key={_id} id={_id} title={title} author={author} created_date={created_at} publisher={publisher} ></BookDetail>);
    }

    const filteredBooks = filterBooks();

    const renderEmptyContainer = () => (<div className="text-center relative p-5 bg-blue-400 text-blue-900">
                                            <h2 className="text-2xl font-medium">Empty</h2>
                                        </div>);

    const renderBookList = () => (<div className="flex flex-wrap">
                                    {filteredBooks}
                                </div>);

    return (
        <div className="p-5 bg-blue-100">
            <div className="container mx-auto">
                <Search search={search} setSearch={setSearch}></Search>
                { filteredBooks.length === 0 ? renderEmptyContainer() :  renderBookList() }
            </div>
        </div>
    );
};

export default Home;
