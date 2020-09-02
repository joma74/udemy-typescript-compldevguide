import { AxiosPromise } from "axios"

export interface ISync<T extends HasId> {
	fetch(id: number): AxiosPromise
	save(data: T): AxiosPromise
}
