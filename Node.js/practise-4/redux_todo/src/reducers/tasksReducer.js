export default function inputsArr (state = [], action) {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.data];
        case "DELETE_TASK":
            return state.filter(el => el.id !== action.id);
        case "EDIT_TASK":
            const input = action.input;
            return state.map(el => el.id === action.id ? {...el, input} : el);
        case "IS_ACTIVE":
            return state.map(el=> (el.id === action.id)? {...el,isActive:!el.isActive}:el);

        default:
            return state
    }
}
