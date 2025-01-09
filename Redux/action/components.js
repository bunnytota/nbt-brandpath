
// CLEAN
export const clearerror = () => ({
    type: 'CLEAR_ERROR',
});

export const clearmessege = () => ({
    type: 'CLEAR_MESSEGE',
});

//LOADER
export const setloading = loading => ({
    type: 'LOADING',
    payload: loading,
});
