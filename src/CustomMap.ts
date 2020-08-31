import { User } from "./User"
import { Company } from "./Company"
import { Mappable } from "./types/Mappable"

export class CustomMap {
	private googleMap: google.maps.Map

	constructor(elementId: string) {
		let mapDiv: HTMLElement | null = document.getElementById("map")
		if (mapDiv === null) {
			throw new Error("Element of id 'map' was not found in the document")
		}
		this.googleMap = new google.maps.Map(mapDiv, {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		})
	}

	addMarker(mappable: Mappable) {
		let marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
			title: mappable.title(),
		})
		const infowindow = new google.maps.InfoWindow({
			content: mappable.contentString(),
		})
		marker.addListener("click", () => {
			infowindow.open(this.googleMap, marker)
		})
	}
}
