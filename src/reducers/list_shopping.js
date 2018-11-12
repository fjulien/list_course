let initialState = [];

const list_shopping = (state = initialState, action) => {

    let nextState = [...state];
    let getIndexToAdd;

    switch (action.type) {
        case 'ADDLIST':
            return [
                ...state,
                action.produit
            ];
        case 'DELETE':
            return state.filter(element => element.id !== action.id)

        case 'ADD_QUANTITE':
            getIndexToAdd = state.findIndex(element => element.id === action.produit.id)
            nextState[getIndexToAdd] = {
                ...action.produit,
                quantite: parseInt(state[getIndexToAdd].quantite) + 1,
                
            }
            return nextState

        case 'REMOVE_QUANTITE':
            getIndexToAdd = state.findIndex(element => element.id === action.produit.id);

            nextState[getIndexToAdd] = {
                ...action.produit,
                quantite: (state[getIndexToAdd].quantite > 0) ? parseInt(state[getIndexToAdd].quantite) - 1 : 0,
            }
            return nextState;

        case 'EDIT':
            getIndexToAdd = state.findIndex(element => element.id === action.produit.id)
            nextState[getIndexToAdd] = {
                id: action.produit.id,
                name: action.produit.name,
                category: action.produit.category,
                next_course: action.produit.next_course,
                quantite: action.produit.quantite,
                prix: action.produit.prix,
            }
            return nextState

        default:
            return state;
    }
}

export default list_shopping;