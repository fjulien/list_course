import { combineReducers } from "redux";

import list_shoppingReducer  from "./list_shopping";

const allReducers = combineReducers({
    list_shopping: list_shoppingReducer,
})

export default allReducers;