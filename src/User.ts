import { UserProps } from "./types/external/UserProps"
import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"
import { Event } from "./Event"
import { isANumber } from "./Utils"

export class User {
	events: Eventing = new Eventing()
	sync: Sync<UserProps> = new Sync()
	attributes: Attributes<UserProps> = new Attributes(this.data)

	constructor(private data: UserProps) {}

	/**
	 * USAGE
	 * ```ts
	 *  user.on(Event.change, (e) => {
	 *      console.log(`Event "${e}" has been called`)
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
		return this.attributes.getByVariableKey
	}

	set = (update: UserProps) => {
		this.attributes.set(update)
		this.events.trigger(Event.change)
	}

	fetch = () => {
		const id = this.attributes.getByLiteralKey("id")
		if (isANumber(id)) {
			this.sync.fetch(id).then((data) => {
				this.set(data) // so we trigger the event
			})
		} else {
			throw new Error("Can not fetch without an id")
		}
	}
}
