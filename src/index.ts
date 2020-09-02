import { User } from "./models/User"
import { Event } from "./models/Event"

let user = User.build({ id: 14, name: "3NU3", age: 111 })
user.on(Event.SAVE, (e) => {
	console.log(`event "${e}" has been called`)
	console.log(user)
})

user.save()
