import { applyMiddleware, combineReducers, createStore } from "redux"
import { requestUser } from "./AppStoreActions"
import { userReducer } from "./AppStoreReducers"
import { asyncDispatchmiddleware } from "./AsyncDispatchMiddleware"
import { UserActionTypes } from "./types"

const rootReducer = combineReducers({
	user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
	userReducer,
	applyMiddleware(asyncDispatchmiddleware),
)

store.dispatch(requestUser({ id: 13 }) as UserActionTypes)
