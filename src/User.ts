import faker from "faker"
import { Location } from "./types/Location"
import { generate } from "./WorldLocation"
import { Mappable } from "./types/Mappable"

export class User implements Mappable {
	name: string
	location: Location

	constructor() {
		this.name = faker.name.firstName()
		let location = generate()
		this.location = {
			lat: location.lat,
			lng: location.lng,
		}
	}
	title(): string {
		return `Name: ${this.name}`
	}

	contentString(): string {
		return `Name: ${this.name}`
	}
}
