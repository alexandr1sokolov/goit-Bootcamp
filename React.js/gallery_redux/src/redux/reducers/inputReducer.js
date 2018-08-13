export default function input (state = '', action) {
    switch (action.type) {
        case "UPDATE_INPUT":
            return action.input;

        default:
            return state
    }
}
