const DISPLAY = "updateHeader/DISPLAY";

export const display = (payload) => ({
    type: DISPLAY,
    payload
});

const initialState = {
    menu: "Shop",
    name: "Shop",
    description: "Vitamins & Supplements",
    price: null,
};

export default function updateHeader(state = initialState, action) {
    switch (action.type) {
        case DISPLAY:
            return action.payload;
        default:
            return state;
    }
}
