import { HasId } from "../internal/HasId"

export interface UserProps extends HasId {
	id?: number
	name?: string
	age?: number
}
