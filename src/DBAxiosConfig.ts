import { AxiosRequestConfig } from "axios"

let dbConfig: AxiosRequestConfig = {
	baseURL: "http://localhost:" + process.env.npm_package_config_DB_PORT,
	timeout: 500,
}

export { dbConfig }
