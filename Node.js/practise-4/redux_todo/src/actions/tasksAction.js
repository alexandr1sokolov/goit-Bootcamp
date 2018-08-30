export const addTask = (input) => (
    {
        type: "ADD_TASK",
        data: {
            id: Date.now(),
            input,
            isActive: false,
        }
    });

export const deleteTask = (id) => (
    {
        type: "DELETE_TASK",
        id: id

    });

export const editTask = (id,input) => (
    {
        type: "EDIT_TASK",
        id: id,
        input: input,

    });

export const isActive = (num) => ({type: "IS_ACTIVE", id:num,});









