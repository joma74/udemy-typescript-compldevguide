import { hasKey, hasKey2 } from "./Utils"

export class Attributes<T> {
	constructor(private data: T) {}

	/**
	 * Uses Utils.hasKey(key in obj solution with RT key is keyof O)
	 *
	 * NOTE
	 * => function captures this
	 *
	 * @param propName
	 */
	get = (propName: string) => {
		if (hasKey(this.data, propName)) {
			return this.data[propName]
		}
	}

	/**
	 * Has to be called by `get2(propName as keyof UserProps)`
	 *
	 * NOTE
	 * => function captures this
	 *
	 * @param propName
	 */
	get2 = (propName: keyof T) => {
		return this.data[propName]
	}

	/**
	 * Uses Utils.hasKey2(hasOwnProperty solution with RT key is keyof O)
	 *
	 * NOTE
	 * => function captures this
	 *
	 * @param propName
	 *
	 */
	get3 = (propName: string) => {
		if (hasKey2(this.data, propName)) {
			return this.data[propName]
		}
	}

	/**
	 * Uses nothing - see signature
	 *
	 * NOTE
	 * => function captures this
	 *
	 * @param key
	 */
	get4 = <K extends keyof T>(key: K): T[K] => {
		return this.data[key]
	}

	/**
	 *
	 * NOTE
	 * => function captures this
	 *
	 * @param update
	 */
	set = (update: T) => {
		Object.assign(this.data, update)
	}
}
