import { BOOK_CATEGORIES } from '../../../constants/book-categories';
import InputOption from '../../Base/InputOption';
import './Search.css';

/**
 * Search Component
 * @param {object} param0 
 * @returns 
 */
const Search = ({setSearch, search}) => {

    const renderCategoryChange = e => {
        setSearch({
            ...search,
            category: e.target.value
        });
    };

    const renderKeywordChange = e => {
        setSearch({
            ...search,
            keyword: e.target.value
        });
    };

    return (
        <div className="mb-3 sm:flex justify-between items-center">
            <h1 className="sm:ml-5 sm:mb-0 text-3xl text-blue-900 mb-3">Books</h1>
            <div className="sm:flex items-center">
                <select onChange={renderCategoryChange} className="px-3 py-1 sm: w-full sm:w-1/2 sm:mr-3 mb-3 sm:mb-0 outline-none text-blue-900" name="category" id="category">
                    <InputOption is_disabled={true} value="" display_name="Select a category..."></InputOption>
                    <InputOption value={BOOK_CATEGORIES.title} display_name={BOOK_CATEGORIES.title}></InputOption>
                    <InputOption value={BOOK_CATEGORIES.author} display_name={BOOK_CATEGORIES.author}></InputOption>
                    <InputOption value={BOOK_CATEGORIES.publisher} display_name={BOOK_CATEGORIES.publisher}></InputOption>
                    <InputOption value={BOOK_CATEGORIES.created_date} display_name="Created Date"></InputOption>
                </select>
                <div className="relative flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="magnifying-glass-icon absolute h-5 w-5  text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input onChange={renderKeywordChange} className="w-full sm:mr-0 block pl-12 pr-3 py-1 outline-none text-blue-900" placeholder="Search here.." type="text" name="search" id="search" />
                </div>
            </div>
        </div>
    );
};

export default Search;
