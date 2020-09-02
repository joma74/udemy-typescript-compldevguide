import { Event } from "../../Event"

export type Callback = (e: Event) => void

export interface IEventing {
	on(e: Event, callback: Callback): void
	trigger(e: Event): void
}
