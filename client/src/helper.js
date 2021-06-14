
/**
 * Convert object into array
 * @param {object} object 
 * @returns 
 */
const mapObjectToArray = (object) => {
    let filteredResult = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            filteredResult = [...filteredResult, object[key]]
        }
    }
    return filteredResult;
};

/**
 * Capitalize first letter of string
 * @param {string} string 
 * @returns 
 */
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export { mapObjectToArray, capitalizeFirstLetter };
