import { useState } from 'react';
import Search from "./Search/Search";
import { BOOK_CATEGORIES } from '../../constants/book-categories';

/**
 * Home Component
 * @returns JSX
 */
const Home =  () => {

    const [ search, setSearch ] = useState({
        category: BOOK_CATEGORIES.title,
        keyword: ''
    });

    const renderEmptyContainer = () => (<div className="text-center relative p-5 bg-blue-400 text-blue-900">
                                            <h2 className="text-2xl font-medium">Empty</h2>
                                        </div>);

    return (
        <div className="p-5 bg-blue-100">
            <div className="container mx-auto">
                <Search search={search} setSearch={setSearch}></Search>
            </div>
        </div>
    );
};

export default Home;
