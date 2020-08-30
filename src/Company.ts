import faker from "faker"
import { Location } from "./types/Location"

export class Company {
	companyName: string
	catchPhrase: string
	location: Location

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: parseFloat(faker.address.longitude()),
			lng: parseFloat(faker.address.latitude()),
		}
	}
}
