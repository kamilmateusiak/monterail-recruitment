import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../../store'
import App from './index';

it('renders without crashing', () => {
	const div = document.createElement('div');

	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
			</ConnectedRouter>
		</Provider>,
		div
	);
})