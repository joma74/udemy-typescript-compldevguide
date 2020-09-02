import axios from "axios"
import { dbConfig } from "./DBAxiosConfig"
import { default as validateUserProps } from "./types/external/UserProps.validator"
import { UserProps } from "./types/external/UserProps"
import { HasId } from "./types/internal/HasId"
import { StatusCodes } from "http-status-codes"

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

	save(data: T): Promise<UserProps> {
		const { id } = data
		if (id) {
			return axios
				.put(`users/${id}`, data, dbConfig)
				.then((rs) => {
					if (StatusCodes.OK != rs.status) {
						throw new Error(`Save PUT request failed with >>${rs.status}<<`)
					}
					return validateUserProps(rs.data)
				})
				.catch((error) => {
					throw error
				})
		} else {
			return axios
				.post(`users`, data, dbConfig)
				.then((rs) => {
					if (StatusCodes.CREATED != rs.status) {
						throw new Error(`Save POST request failed with >>${rs.status}<<`)
					}
					return validateUserProps(rs.data)
				})
				.catch((error) => {
					throw error
				})
		}
	}
}
