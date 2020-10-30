import { AnyAction } from "redux"
import { UserProps } from "../types/external/UserProps"
import { IHasId } from "../types/internal/IHasId"

interface AppData {
	theUser?: UserProps
}

export enum UIState {
	NOT_LOADED = "NOT_LOADED",
	IS_LOADING = "IS_LOADING",
	IS_LOADED = "IS_LOADED",
}

export enum Status {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
}

export const REQUEST_USER = "REQUEST_USER"
export const RESPONSE_USER = "RESPONSE_USER"
export const DONOTUSE = "DONOTUSE"

export type asyncDispatch = (asyncAction: AnyAction) => void

export interface RequestUserAction {
	type: typeof REQUEST_USER
	meta: IHasId
}

export interface RecieveFailureUserAction {
	type: typeof RESPONSE_USER
	status: Status.ERROR
	error: Error
}

export interface RecieveSuccessUserAction {
	type: typeof RESPONSE_USER
	status: Status.SUCCESS
	payLoad: UserProps
}

interface DoNotUseUserAction {
	type: typeof DONOTUSE
}

export type AppState = { data: AppData; uiState: UIState; message: string }

export type UserActionTypes =
	| ((
			| RequestUserAction
			| RecieveFailureUserAction
			| RecieveSuccessUserAction
	  ) & { asyncDispatch: asyncDispatch })
	| DoNotUseUserAction
