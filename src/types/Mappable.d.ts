import { Location } from "./Location"

export interface Mappable {
	location: Location
	contentString(): string
	title(): string
}
