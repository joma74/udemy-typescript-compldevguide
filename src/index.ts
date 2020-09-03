import { Event } from "./models/Event"
import { User } from "./models/User"
import { Sync } from "./models/Sync"

const users = User.buildUserCollection(new Sync("/users"))
users.on(Event.CHANGE, (e) => {
	console.log(users)
})
users.fetch()
