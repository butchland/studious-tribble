/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { IGenDate } from 'types'

const { VITE_HOME_PATH } = import.meta.env

export default async function getGenDate(): Promise<IGenDate> {
	const response = await fetch(`${VITE_HOME_PATH}/api/generated.json`)
	return response.json() as Promise<IGenDate>
}
