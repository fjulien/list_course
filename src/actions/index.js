let id = 0;

export const addList = (produitIn) => {
    id +=1;
    return {
        type: 'ADDLIST',
        produit:{
            id: id,
            ...produitIn,
            quantite: (produitIn.quantite === "") ? 0 : produitIn.quantite,
            prix: (produitIn.prix === "") ? 0 : produitIn.prix,
        }
    }
}

export const del = (id) => ({
    type: 'DELETE',
    id
})

export const add_quantite = (produit) => ({
    type: 'ADD_QUANTITE',
    produit
})

export const remove_quantite = (produit) => ({
    type: 'REMOVE_QUANTITE',
    produit
})

export const edit = (produit) => ({
    type: 'EDIT',
    produit
})