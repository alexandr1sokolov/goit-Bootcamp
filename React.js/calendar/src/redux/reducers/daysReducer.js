export default function days(state = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'], action) {
    switch (action.type) {
        case "DAYS":
            return state;
        default:
            return state
    }
}