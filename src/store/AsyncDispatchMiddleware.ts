import { AnyAction, Middleware } from "redux"

export const asyncDispatchmiddleware: Middleware = (store) => (next) => (
	action,
) => {
	let syncActivityFinished = false
	let actionQueue: AnyAction[] = []

	function flushQueue() {
		actionQueue.forEach((a) => store.dispatch(a)) // flush queue
		actionQueue = []
	}

	function asyncDispatch(asyncAction: AnyAction) {
		actionQueue = actionQueue.concat([asyncAction])

		if (syncActivityFinished) {
			flushQueue()
		}
	}

	const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch })

	next(actionWithAsyncDispatch)
	syncActivityFinished = true
	flushQueue()
}
