import faker from "faker"
import { Location } from "./types/Location"
import { generate } from "./WorldLocation"
import { Mappable } from "./types/Mappable"

export class Company implements Mappable {
	companyName: string
	catchPhrase: string
	location: Location

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		let location = generate()
		this.location = {
			lat: location.lat,
			lng: location.lng,
		}
	}
	title(): string {
		return `Companyname: ${this.companyName}`
	}

	contentString(): string {
		return `Companyname: ${this.companyName},</br>Slogan: ${this.catchPhrase}`
	}
}
