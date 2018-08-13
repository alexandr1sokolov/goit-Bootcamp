export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + (action.payload);
        case 'DECREASE':
            return state - (action.payload);
        case 'RESET':
            return 0;
        default:
            return state;
    }
}