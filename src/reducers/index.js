import { combineReducers } from "redux";

import list_shoppingReducer  from "./list_shopping";
import list_shopping_urgentReducer from "./list_shopping_urgent";
import list_shopping_commandReducer from "./list_shopping_command";

const allReducers = combineReducers({
    list_shopping: list_shoppingReducer,
    list_shopping_command: list_shopping_commandReducer,
    list_shopping_urgent: list_shopping_urgentReducer
})

export default allReducers;