//COMBINES ALL THE REDUCERS (kinda like a faCade pattern)
import { combineReducers } from "redux"

import todos from "./todosReducer"

export default combineReducers({
	todos
})
