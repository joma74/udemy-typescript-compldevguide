import { IHasId } from "../internal/IHasId"

export interface UserProps extends IHasId {
	id?: number
	name?: string
	age?: number
}
