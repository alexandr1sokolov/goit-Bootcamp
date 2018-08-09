export const addInput = (input) => (
    {
        type: "ADD_INPUT",
        data: {
            id: Date.now(),
            input,
        }
    });

export const deleteInput = (id) => (
    {
        type: "DELETE_INPUT",
        id: id

    });





