export const getFromLocalStorage = (key) => {
  try {
    const item = JSON.parse(localStorage.getItem(key));
    return item;
  } catch (error) {
    console.log(error.message);
    localStorage.removeItem(key);
    return null;
  }
};