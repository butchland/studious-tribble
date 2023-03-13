/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { IGenDate } from 'types'

const { VITE_HOME_PATH } = import.meta.env

export default async function getGenDate(): Promise<string> {
	const response = await fetch(`${VITE_HOME_PATH}/api/generated.json`)
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (response.status !== 200) {
		const genDateFinal = `VITE_HOME_PATH = '${VITE_HOME_PATH}', response code = '${response.status}'`
		return genDateFinal
	}
	const gendatePromise = (await response.json()) as Promise<IGenDate>
	const gendateContent: IGenDate = await gendatePromise
	const genDateFinal = `VITE_HOME_PATH = '${VITE_HOME_PATH}', ${gendateContent.update}`
	return genDateFinal
}
