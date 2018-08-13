export default function gallery (state = [], action) {
    switch (action.type) {
        case 'DEFAULT_GALLERY':
            return state=[...action.payload];
        default:
            return state;
    }
}