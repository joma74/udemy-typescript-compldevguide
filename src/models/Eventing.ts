import { Event } from "./Event"
import { Callback, IEventing } from "../types/internal/IEventing"

export class Eventing implements IEventing {
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

	/**
	 * NOTE
	 * => function captures this
	 *
	 * @param eventName
	 */
	triggerError = (e: Event, error: Error): void => {
		const handlers = this.events[e]
		if (handlers && handlers.length > 0) {
			handlers.forEach((callback) => {
				callback(e, error)
			})
		}
	}
}
