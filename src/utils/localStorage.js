/**
 *@param {string} key
 */

export const getData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    } catch (e) {
        return undefined;
    }
}

/**
 * @param {string} key
 * @param {any} data
 */

export const setData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}