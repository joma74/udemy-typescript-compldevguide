import { Event } from "./Event"
import { isANumber } from "../Utils"
import { IModelAttributes } from "../types/internal/IModelAttributes"
import { ISync } from "../types/internal/ISync"
import { IEventing } from "../types/internal/IEventing"
import { IHasId } from "../types/internal/IHasId"

export abstract class Model<T extends IHasId> {
	constructor(
		private attributes: IModelAttributes<T>,
		private events: IEventing,
		private sync: ISync<T>,
	) {}

	abstract validate(data: unknown): T

	/**
	 * USAGE
	 * ```ts
	 *  user.on(Event.change, (e) => {
	 *      console.log(`Event "${e}" has been called`)
	 *  })
	 * ```
	 *
	 * NOTE
	 *
	 * `get` makes sure it is defined after `this.events` have been intialized
	 */
	get on() {
		return this.events.on
	}

	/**
	 * NOTE
	 *
	 * `get` makes sure it is defined after `this.events` have been intialized
	 */
	get trigger() {
		return this.events.trigger
	}

	/**
	 * NOTE
	 *
	 * `get` makes sure it is defined after `this.attributes` have been intialized
	 */
	get get() {
		return this.attributes.getByVariableKey
	}

	set = (update: T) => {
		this.attributes.set(update)
		this.events.trigger(Event.CHANGE)
	}

	fetch = () => {
		const id = this.attributes.getByLiteralKey("id")
		if (isANumber(id)) {
			this.sync
				.fetch(id)
				.then((rs) => {
					this.set(this.validate(rs.data)) // so we trigger the event
				})
				.catch((e) => {
					console.log(e)
					this.trigger(Event.ERROR)
				})
		} else {
			throw new Error("Can not fetch without an id")
		}
	}

	save = () => {
		this.sync
			.save(this.attributes.getAll())
			.then((rs) => {
				this.set(this.validate(rs.data))
				this.trigger(Event.SAVE)
			})
			.catch((e) => {
				console.log(e)
				this.trigger(Event.ERROR)
			})
	}
}
