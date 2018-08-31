export default function inputsArr (state = [], action) {
    switch (action.type) {
        case "LOAD_TASKS":
            return action.payload;
        case "ADD_TASK":
            return [action.payload, ...state];
        case "DELETE_TASK":
            return state.filter(el => el._id !== action.id);
        case "EDIT_TASK":
            const input = action.input;
            return state.map(el => el._id === action.id ? {...el, input} : el);
        case "IS_ACTIVE":
            return state.map(el => (el._id === action.id) ? {...el, isActive: !el.isActive} : el);

        default:
            return state
    }
}
