import { UserProps } from "./types/external/UserProps"
import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"
import { Event } from "./Event"
import { isANumber } from "./Utils"
import { default as validateUserProps } from "./types/external/UserProps.validator"

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
		this.events.trigger(Event.CHANGE)
	}

	fetch = () => {
		const id = this.attributes.getByLiteralKey("id")
		if (isANumber(id)) {
			this.sync
				.fetch(id)
				.then((data) => {
					this.set(validateUserProps(data)) // so we trigger the event
				})
				.catch(() => {
					this.trigger(Event.ERROR)
				})
		} else {
			throw new Error("Can not fetch without an id")
		}
	}

	save = () => {
		this.sync
			.save(this.attributes.getAll())
			.then((newData) => {
				this.set(validateUserProps(newData))
				this.trigger(Event.SAVE)
			})
			.catch(() => {
				this.trigger(Event.ERROR)
			})
	}
}
