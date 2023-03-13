/* eslint-disable @typescript-eslint/restrict-template-expressions */
import App from 'App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		const { VITE_HOME_PATH } = import.meta.env
		window.history.pushState({}, 'Home', `${VITE_HOME_PATH}/`)
		renderWithProviders(<App />, false)

		// await expect(screen.findByText('Apple')).resolves.toBeInTheDocument()
		// await userEvent.click(screen.getByText('Apple'))

		// await expect(
		// 	screen.findByText('Vitamins per 100 g (3.5 oz)')
		// ).resolves.toBeInTheDocument()
	})
})
