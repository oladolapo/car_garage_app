export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

export const writeToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
