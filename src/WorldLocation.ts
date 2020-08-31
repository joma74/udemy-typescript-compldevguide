import { Location } from "./types/Location"

const LAT_MAX = 90
const LAT_MIN = -90

const LNG_MAX = 180
const LNG_MIN = -180

export function generate() {
	let location: Location = {
		lat: Math.random() * (LAT_MAX - LAT_MIN) + LAT_MIN,
		lng: Math.random() * (LNG_MAX - LNG_MIN) + LNG_MIN,
	}
	return location
}
