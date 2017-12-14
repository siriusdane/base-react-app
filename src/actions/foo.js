// ACTION NAMES
export const UPDATE_TEXT = 'FOO_UPDATE_TEXT';

// PRIVATE ACTIONS
function updateText(text) {
    return { type: UPDATE_TEXT, text };
}

// PUBLIC ACTIONS
export function fooUpdateText(text) {
    return dispatch => {
        dispatch(updateText(text));
    };
}
