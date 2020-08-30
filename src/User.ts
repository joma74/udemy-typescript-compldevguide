import faker from "faker"
import { Location } from "./types/Location"

export class User {
	name: string
	location: Location

	constructor() {
		this.name = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.longitude()),
			lng: parseFloat(faker.address.latitude()),
		}
	}
}
