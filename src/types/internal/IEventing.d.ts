import { Event } from "../../Event"

export type Callback = (e: Event, error?: Error) => void

export interface IEventing {
	on(e: Event, callback: Callback): void
	trigger(e: Event): void
	triggerError(e: Event, error: Error): void
}
