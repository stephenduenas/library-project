import Links from "../Base/Links";

/**
 * Navigation Component
 * @returns JSX
 */
const NavigationBar = () => {
    return (
        <header className="bg-blue-300 text-blue-900">
            <div className="container mx-auto">
                <div className="sm:flex justify-between items-center">
                <div>
                    <span className="text-xl p-5 block">Library Project</span>
                </div>
                <ul className="sm:flex items-center">
                    <li> <Links title="Home" path="/"></Links> </li>
                    <li> <Links title="Add Book" path="/form"></Links> </li>
                </ul>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;