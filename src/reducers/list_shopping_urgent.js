let initialState = [];

const list_shopping_urgent = (state = initialState, action) => {
    switch (action.type) {
        case 'FINALISATION':
            return action.produits.filter(produits => produits.next_course);
        default:
            return state;
    }
}
export default list_shopping_urgent;