const ADD = "addCart/ADD";
const REMOVE = "addCart/REMOVE";

export const add = (payload) => ({
    type: ADD,
    payload,
});

export const remove = (id) => ({
    type: REMOVE,
    id,
});

const data = JSON.parse(window.localStorage.getItem("save"));
const initialState =  data?data:[];

export default function addCart(state = initialState, action) {
    let temp;
    switch (action.type) {
        case ADD:
            temp = [...state];
            temp.push(action.payload);
            window.localStorage.setItem("save", JSON.stringify(temp));

            return temp;
        case REMOVE:
            console.log(action);
            temp = [...state];
            const idx = temp.findIndex((item) => {
                return item.id === action.id;
            });
            temp.splice(idx, 1);
            window.localStorage.setItem("save", JSON.stringify(temp));

            return temp;
        default:
            return state;
    }
}
