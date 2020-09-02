import { hasKey, hasKey2 } from "./Utils"

export class Attributes<T> {
	constructor(private data: T) {}

	/**
	 * At runtime `key in obj' check.
	 *
	 * Returns `T[string & keyof T] | undefined`, which is
	 * - not sufficient for a constant/literal parameter
	 * - sufficient for a variable parameter
	 *
	 * to return expected typed results.
	 *
	 * Narrowed Return Types are
	 * - `this.data` becomes `Attributes<T>.data: T`
	 * - `propName` becomes `string & keyof T`)
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param propName
	 */
	getByVariableKey2 = (propName: string) => {
		if (hasKey(this.data, propName)) {
			return this.data[propName]
		}
	}

	/**
	 * At runtime no check.
	 *
	 * Returns `T[keyof T]`, which is
	 * - not sufficient for a constant/literal parameter
	 * - not sufficient for a variable parameter iff called by `get2(propName as keyof UserProps)`
	 * - breaks for a variable parameter iff called by `get2(propName)`
	 *
	 * to return expected typed results.
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param propName
	 */
	get2 = (propName: keyof T) => {
		return this.data[propName]
	}

	/**
	 * At runtime `hasOwnProperty` check.
	 *
	 * Returns `T[string & keyof T] | undefined`, which is
	 * - not sufficient for a constant/literal parameter
	 * - sufficient for a variable parameter
	 *
	 * to return expected typed results.
	 *
	 * Narrowed Return Types are
	 * - `this.data` becomes `Attributes<T>.data: T`
	 * - `propName` becomes `string & keyof T`)
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param key
	 *
	 */
	getByVariableKey = (key: string) => {
		if (hasKey2(this.data, key)) {
			return this.data[key]
		}
	}

	/**
	 * At runtime no check.
	 *
	 * Returns `T[K]`, which is
	 * - sufficient for a constant/literal parameter
	 * - not sufficient for a variable parameter iff called by `get4(propName as keyof UserProps)`
	 * - breaks for a variable parameter iff called by `get2(propName)`
	 *
	 * to return expected typed results.
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param key
	 */
	get4 = <K extends keyof T>(key: K): T[K] => {
		return this.data[key]
	}

	/**
	 * At runtime `hasOwnProperty` check.
	 *
	 * Returns `T[K] | undefined`, which is
	 * - sufficient for a constant/literal parameter
	 * - not sufficient for a variable parameter iff called by `get5(propName as keyof UserProps)`
	 * - breaks for a variable parameter iff called by `get2(propName)`
	 *
	 * to return expected typed results.
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param key
	 */
	getByLiteralKey = <K extends keyof T>(key: K): T[K] | undefined => {
		if (hasKey2(this.data, key)) {
			return this.data[key]
		}
		return undefined
	}

	/**
	 *
	 * NOTE
	 *
	 * `=>` function captures this
	 *
	 * @param update
	 */
	set = (update: T) => {
		Object.assign(this.data, update)
	}
}
