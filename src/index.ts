import { Company } from "./Company"
import { User } from "./User"

let c = new Company()
console.log(c)

let u = new User()
console.log(u)

let map: HTMLElement | null = document.getElementById("map")
if (map === null) {
	throw new Error("Element of id 'map' was not found in the document")
}
new google.maps.Map(map, {
	zoom: 1,
	center: {
		lat: 0,
		lng: 0,
	},
})
