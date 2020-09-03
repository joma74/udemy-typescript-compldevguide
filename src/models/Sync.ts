import axios, { AxiosPromise } from "axios"
import { dbConfig } from "../DBAxiosConfig"
import { IHasId } from "../types/internal/IHasId"
import { StatusCodes } from "http-status-codes"
import { ISync } from "../types/internal/ISync"

export class Sync<T extends IHasId> implements ISync<T> {
	constructor(private resourcePath: string) {}

	get resourcePathValue() {
		return this.resourcePath
	}

	fetch = (id: number): AxiosPromise => {
		return axios
			.get(`${this.resourcePath}/${id}`, dbConfig)
			.then((rs) => {
				return rs
			})
			.catch((error) => {
				throw error
			})
	}

	save = (data: T): AxiosPromise => {
		const { id } = data
		if (id) {
			return axios
				.put(`${this.resourcePath}/${id}`, data, dbConfig)
				.then((rs) => {
					if (StatusCodes.OK != rs.status) {
						throw new Error(`Save PUT request failed with >>${rs.status}<<`)
					}
					return rs
				})
				.catch((e) => {
					throw e
				})
		} else {
			return axios
				.post(`${this.resourcePath}`, data, dbConfig)
				.then((rs) => {
					if (StatusCodes.CREATED != rs.status) {
						throw new Error(`Save POST request failed with >>${rs.status}<<`)
					}
					return rs
				})
				.catch((e) => {
					throw e
				})
		}
	}
}
