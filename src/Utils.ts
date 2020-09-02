/**
 *
 * Assumes a compile time return type assertion that `key` is a key of  `obj`, which is asserted
 * at runtime by returning.
 *
 * This function uses the `in` operator for it's runtime assertion, which includes additionally
 * any property on the prototype chain.
 *
 * USAGE
 *
 * Given
 * ```ts
 * interface UserProps {
 *   name?: string
 *   age?: number
 * }
 * ```
 * , `hasKey` in effect narrows `propName` of `data:UserProps` into `propName: "name" | "age"`.
 * Hence `data[propName]` works fine by returning types of `number | string | undefined`
 *
 * ```ts
 * if (hasKey(data, propName)) {
 *   return data[propName] // works fine!
 * }
 * ```
 *
 * SEE ALSO
 * - https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
 *
 * @param obj The TS typed object
 * @param key The key which is supposed to be on obj, inclusive on the prototype chain
 */
export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
	return key in obj
}

/**
 *
 * Assumes a compile time return type assertion that `key` is a key of  `obj`, which is asserted
 * at runtime by returning.
 *
 * This function uses the `Object.prototype.hasOwnProperty` function for it's runtime assertion,
 * which does not include any property on the prototype chain.
 *
 * USAGE
 *
 * Given
 * ```ts
 * interface UserProps {
 *   name?: string
 *   age?: number
 * }
 * ```
 * , `hasKey2` in effect narrows `propName` of `data:UserProps` into `propName: "name" | "age"`.
 * Hence `data[propName]` works fine by returning types of `number | string | undefined`
 *
 * ```ts
 * if (hasKey2(data, propName)) {
 *   return data[propName] // works fine!
 * }
 * ```
 *
 * SEE ALSO
 * - https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
 *
 * @param obj The TS typed object
 * @param key The key which is supposed to be on obj, exclusive on the prototype chain
 */
export function hasKey2<O>(obj: O, key: PropertyKey): key is keyof O {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * !
 * !This does not work with GENERICS
 * !
 * Assumes a compile time return type assertion of `O`, iff the key is given as a constant.
 * Else it returns an intersection of `O` and `Record<K, unknown>`.
 *
 * This function uses the `Object.prototype.hasOwnProperty` function for it's runtime assertion,
 * which does not include any property on the prototype chain.
 *
 * USAGE #1
 *
 * Given
 * ```ts
 * interface UserProps {
 *   name?: string
 *   age?: number
 * }
 * ```
 * `hasKey3` in effect narrows `data` into `UserProps`.
 * Hence `data["age"]` works fine by returning a type of `number | string | undefined`.
 *
 * ```ts
 * if (hasKey3(data, "age")) {
 *   return data["age"] // works fine!
 * }
 * ```
 * USAGE #2
 *
 * Given
 * ```ts
 * interface UserProps {
 *   name?: string
 *   age?: number
 * }
 * ```
 * `hasKey3` in effect narrows `data` into `UserProps & Record<string, unknown>`.
 * Hence `data[propName]` works not fine by returning a type of `unknown`.
 *
 * ```ts
 * if (hasKey3(data, propName)) {
 *   value = data[propName] // works not fine!
 *   if (isNumber(value) || isString(value)) {
 *		return value
 *	 }
 * }
 * ```
 *
 * SEE ALSO
 * - https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
 *
 * @param obj The TS typed object
 * @param key The key which is supposed to be on obj, exclusive on the prototype chain
 */
export function hasKey3<O extends object, K extends PropertyKey>(
	obj: O,
	key: K,
): obj is ObjectWithKey<O, K> {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * Asserts `O` is of type `O`, iff `K` is a constant and exists on `O.` Else it returns an intersection of `O` and `Record<K, unknown>`.
 */
type ObjectWithKey<O extends object, K extends PropertyKey> = K extends keyof O
	? O
	: O & Record<K, unknown>

export function isANumber(value: unknown): value is number {
	return "number" === typeof value
}

export function isAString(value: unknown): value is string {
	return "string" === typeof value
}
