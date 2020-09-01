import axios, { AxiosPromise } from "axios"
import { dbConfig } from "./DBAxiosConfig"
import { default as validateUserProps } from "./types/external/UserProps.validator"
import { UserProps } from "./types/external/UserProps"
import { HasId } from "./types/internal/HasId"

export class Sync<T extends HasId> {
	fetch(id: number): Promise<UserProps> {
		return axios
			.get(`users/${id}`, dbConfig)
			.then((rs) => {
				return validateUserProps(rs.data)
			})
			.catch((error) => {
				throw error
			})
	}

	save(data: T): AxiosPromise {
		const { id } = data
		if (id) {
			return axios.put(`users/${id}`, data, dbConfig)
		} else {
			return axios.post(`users`, data, dbConfig)
		}
	}
}
