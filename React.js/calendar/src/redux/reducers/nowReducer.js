import moment from 'moment';
export default function now (state = moment(), action) {
    let today = state.clone();
    switch (action.type) {
        case "NEXT_MONTH":
            return today.add(1, 'M');

        case "PREV_MONTH":
            return today.subtract(1, 'M');

        default:
            return state
    }
}

