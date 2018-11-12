let initialState = [];

const list_shopping_command = (state = initialState, action) => {
    switch (action.type) {
        case 'FINALISATION':
           
            return action.produits.filter(produit => !produit.next_course);

        default:
         return state;
    }
}
export default list_shopping_command;