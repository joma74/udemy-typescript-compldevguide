const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

logNumber(10000)

const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)
console.log(coordinates)