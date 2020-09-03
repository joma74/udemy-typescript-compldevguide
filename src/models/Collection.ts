import { Eventing } from "./Eventing"
import Axios from "axios"
import { dbConfig } from "../DBAxiosConfig"
import { Event } from "./Event"
import { Sync } from "./Sync"
import { IHasId } from "../types/internal/IHasId"

export class Collection<T, K> {
	models: T[] = []
	events: Eventing = new Eventing()

	constructor(
		private validate: (data: unknown) => K,
		private build: (attrs: K, sync: Sync<IHasId>) => T,
		private sync: Sync<IHasId>,
	) {}

	get on() {
		return this.events.on
	}

	get trigger() {
		return this.events.trigger
	}

	fetch = () => {
		Axios.get(this.sync.resourcePathValue, dbConfig).then((rs) => {
			rs.data.forEach((data: unknown) => {
				const model = this.build(this.validate(data), this.sync)
				this.models.push(model)
			})
		})
		this.trigger(Event.CHANGE)
	}
}
