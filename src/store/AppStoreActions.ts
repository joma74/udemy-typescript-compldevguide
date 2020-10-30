import { UserProps } from "../types/external/UserProps"
import { IHasId } from "../types/internal/IHasId"
import {
	REQUEST_USER,
	RESPONSE_USER,
	Status,
	RequestUserAction,
	RecieveSuccessUserAction,
	RecieveFailureUserAction,
} from "./types"

export function requestUser(idOf: IHasId): RequestUserAction {
	return {
		type: REQUEST_USER,
		meta: idOf,
	}
}

export function recieveSuccessUser(
	payLoad: UserProps,
): RecieveSuccessUserAction {
	return {
		type: RESPONSE_USER,
		status: Status.SUCCESS,
		payLoad,
	}
}

export function recieveFailureUser(error: Error): RecieveFailureUserAction {
	return {
		type: RESPONSE_USER,
		status: Status.ERROR,
		error,
	}
}
