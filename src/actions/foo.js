// ACTION NAMES
const UPDATE_HEADER = 'FOO_UPDATE_HEADER';
const UPDATE_BODY = 'FOO_UPDATE_BODY';
const UPDATE_MENU = 'FOO_UPDATE_MENU';
const UPDATE_FOOTER = 'FOO_UPDATE_FOOTER';

// PRIVATE ACTIONS
function updateHeader(header) {
    return { type: UPDATE_HEADER, header };
}

function updateBody(body) {
    return { type: UPDATE_BODY, body };
}

function updateMenu(menu) {
    return { type: UPDATE_MENU, menu };
}

function updateFooter(footer) {
    return { type: UPDATE_FOOTER, footer };
}

// PUBLIC ACTIONS
export function fooUpdateHeader(header) {
    return dispatch => {
        dispatch(updateHeader(header));
    };
}

export function fooUpdateBody(body) {
    return dispatch => {
        dispatch(updateBody(body));
    };
}

export function fooUpdateMenu(menu) {
    return dispatch => {
        dispatch(updateMenu(menu));
    };
}

export function fooUpdateFooter(footer) {
    return dispatch => {
        dispatch(updateFooter(footer));
    };
}

export default {
    UPDATE_HEADER,
    UPDATE_BODY,
    UPDATE_MENU,
    UPDATE_FOOTER
};
