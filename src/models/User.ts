import { UserProps } from "../types/external/UserProps"
import { default as validateUserProps } from "../types/external/UserProps.validator"
import { Model } from "./Model"
import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"
import { Collection } from "./Collection"

export class User extends Model<UserProps> {
	static build = (attrs: UserProps): User => {
		return new User(new Attributes(attrs), new Eventing(), new Sync("users"))
	}

	static buildUserCollection = () => {
		return new Collection(User.validateStatic, User.build)
	}

	static validateStatic = (data: unknown) => {
		return validateUserProps(data)
	}

	validate = User.validateStatic
}
