import { Eventing } from "./Eventing"
import Axios from "axios"
import { dbConfig } from "../DBAxiosConfig"
import { Event } from "./Event"

export class Collection<T, K> {
	models: T[] = []
	events: Eventing = new Eventing()

	constructor(
		public validate: (data: unknown) => K,
		public build: (attrs: K) => T,
	) {}

	get on() {
		return this.events.on
	}

	get trigger() {
		return this.events.trigger
	}

	fetch = () => {
		Axios.get("/users", dbConfig).then((rs) => {
			rs.data.forEach((data: unknown) => {
				const model = this.build(this.validate(data))
				this.models.push(model)
			})
		})
		this.trigger(Event.CHANGE)
	}
}
