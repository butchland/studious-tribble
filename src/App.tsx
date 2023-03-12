/* eslint-disable @typescript-eslint/restrict-template-expressions */
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	const { VITE_HOME_PATH } = import.meta.env
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path={`${VITE_HOME_PATH}/`} element={<Gallery />} />
					<Route path={`${VITE_HOME_PATH}/:fruitName`} element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
