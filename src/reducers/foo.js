import actions from '../actions/foo.js';

const initialState = {
    header: 'HEADER',
    body: 'BODY',
    menu: 'MENU',
    footer: 'FOOTER'
};

function storeHandler(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_HEADER:
            return { ...state, header: action.header };
        case actions.UPDATE_BODY:
            return { ...state, body: action.body };
        case actions.UPDATE_MENU:
            return { ...state, menu: action.menu };
        case actions.UPDATE_FOOTER:
            return { ...state, footer: action.footer };
        default:
            return { ...state };
    }
}

export default storeHandler;
