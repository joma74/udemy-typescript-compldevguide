import { UserProps } from "./types/external/UserProps"
import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"

export class User {
	events: Eventing = new Eventing()
	sync: Sync<UserProps> = new Sync()
	attributes: Attributes<UserProps> = new Attributes(this.data)

	constructor(private data: UserProps) {}

	/**
	 * WATCH
	 * this is NOT
	 * USAGE
	 * ```ts
	 *  user.on("change", () => {
	 *      console.log("change called")
	 *  })
	 * ```
	 */
	get on() {
		return this.events.on
	}

	get trigger() {
		return this.events.trigger
	}

	get get() {
		return this.attributes.get3
	}
}
