import { Link } from "react-router-dom";

/**
 * Link <a> Component
 * @param {object} param0 
 * @returns 
 */
const Links = ({ title, path }) => {
    return <Link className="px-3 py-3 block hover:bg-blue-500 hover:text-white transition duration-200" to={path}>{ title }</Link>;
}

export default Links;
