export default function inputsArr (state = [], action) {
    switch (action.type) {
        case "ADD_INPUT":
            return [...state, action.data];

        default:
            return state
    }
}

// addInput = (event) => {
//     event.preventDefault();
//     this.setState(prevState => ({
//         inputsArr: [{input: this.state.input, id:Date.now()}, ...prevState.inputsArr],
//         input: '',
//     }))
// };