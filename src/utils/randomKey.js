export const getRandomKey = () => Math.random().toString(36).substring(2, 8) +
    Date.now().toString().substring(9);

export const assignID = (obj) => ({ ...obj, id: getRandomKey() });
