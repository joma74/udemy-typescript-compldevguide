import { IHasId } from "./IHasId"

export interface IModelAttributes<T extends IHasId> {
	getByVariableKey(key: string): T[string & keyof T] | undefined
	getByLiteralKey<K extends keyof T>(key: K): T[K] | undefined
	set(update: T): void
	getAll(): T
}
