import {
	AppState,
	UIState,
	UserActionTypes,
	REQUEST_USER,
	RESPONSE_USER,
	Status,
} from "./types"
import { User } from "../models/User"
import { Sync } from "../models/Sync"
import { Event } from "../models/Event"
import { recieveSuccessUser, recieveFailureUser } from "./AppStoreActions"

const INITIAL_STATE: AppState = {
	data: { theUser: { age: 42, id: 42, name: "Loading..." } },
	uiState: UIState.NOT_LOADED,
	message: "",
}

export function userReducer(
	state = INITIAL_STATE,
	action: UserActionTypes,
): AppState {
	state.message = ""
	switch (action.type) {
		case REQUEST_USER:
			var userOne = User.build({ id: action.meta.id }, new Sync("/users"))
			userOne.on(Event.CHANGE, () => {
				action.asyncDispatch(recieveSuccessUser(userOne.getAll()))
			})
			userOne.on(Event.ERROR, (e, error) => {
				if (error) action.asyncDispatch(recieveFailureUser(error))
			})
			userOne.fetch()
			let result = {
				...state,
				uiState: UIState.IS_LOADING,
			}
			return result
		case RESPONSE_USER:
			if (Status.SUCCESS == action.status) {
				let result = {
					...state,
					data: { theUser: action.payLoad },
					uiState: UIState.IS_LOADED,
				}
				return result
			} else {
				let result = {
					...state,
					data: INITIAL_STATE.data,
					uiState: UIState.NOT_LOADED,
					message: action.error.message,
				}
				return result
			}
		default:
			return state
	}
}
