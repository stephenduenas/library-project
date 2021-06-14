import { capitalizeFirstLetter } from '../../helper';

/**
 * Input Option Component
 * @param {object} param0 
 * @returns 
 */
const InputOption = ({is_disabled = false, value, display_name}) => {
    return <option disabled={is_disabled} value={value}>{capitalizeFirstLetter(display_name)}</option>
};

export default InputOption;
