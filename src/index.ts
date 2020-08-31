import { Company } from "./Company"
import { User } from "./User"
import { CustomMap } from "./CustomMap"

let c = new Company()
console.log(c)

let u = new User()
console.log(u)

let customMap = new CustomMap("map")
customMap.addMarker(u)
customMap.addMarker(c)
