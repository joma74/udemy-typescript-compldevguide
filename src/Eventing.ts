import { Event } from "./Event"

type Callback = (e: Event) => void

export class Eventing {
	events: { [key: string]: Callback[] } = {}

	/**
	 * NOTE
	 * => function captures this
	 *
	 * @param eventName
	 * @param callback
	 */
	on = (e: string, callback: Callback) => {
		const handlers = this.events[e] || []
		handlers.push(callback)
		this.events[e] = handlers
	}

	/**
	 * NOTE
	 * => function captures this
	 *
	 * @param eventName
	 */
	trigger = (e: Event): void => {
		const handlers = this.events[e]
		if (handlers && handlers.length > 0) {
			handlers.forEach((callback) => {
				callback(e)
			})
		}
	}
}
