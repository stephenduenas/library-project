import { capitalizeFirstLetter } from '../../helper';

/**
 * Form Group (Text) Component
 * @param {object} param0 
 * @returns 
 */
const FormGroup = ({ renderChange, name, value }) => {
    return (
        <div className="flex flex-col sm:mx-5 mt-3 lg:w-1/2 lg:mx-auto">
            <label htmlFor={name} className="text-sm text-left ml-1">{capitalizeFirstLetter(name)}</label>
            <input onChange={e => renderChange(e.target.value, name)} value={value} className="outline-none px-2 py-1 text-blue-900" type="text" name={name} id={name} />
        </div>
    );
};

export default FormGroup;
