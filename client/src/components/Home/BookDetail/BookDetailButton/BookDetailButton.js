
/**
 * Book Detail Button Component
 * @param {object} param0 
 * @returns 
 */
const BookDetailButton = ({icon, renderOnClick}) => <a className="cursor-pointer p-5 rounded bg-blue-500 ml-3" onClick={renderOnClick}>{icon}</a>;

export default BookDetailButton;
