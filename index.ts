const logNumber: (i: number) => void = (i) => {
	console.log(i)
}

logNumber(10000)

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates.x)
console.log(coordinates.y)
console.log(coordinates)

let words: string[] = []
let foundWord

words.forEach((word) => {
	if ("green" === word) {
		foundWord = true
	}
})
if (!foundWord) {
	console.log("green not found")
} else {
	console.log("green found")
}

words = ["blue", "green", "red"]

words.forEach((word) => {
	if ("green" === word) {
		foundWord = true
	}
})
if (!foundWord) {
	console.log("green not found")
} else {
	console.log("green found")
}

let unusedLocalWithImplicitAny
