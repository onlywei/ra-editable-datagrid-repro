import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyAdmin } from './Admin';
import { BASE_PATH } from './constants';

export const App = () => {
	// The React-Admin <Admin> does an infinite redirect loop with Okta unless it's wrapped within a
	// react-router <Route> element with the correct path. This can most likely be explained by the
	// fact that React-Admin is also using react-router under the hood, and their built in <Route>
	// elements interact with the parent <Route> that we are defining in this file.
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MyAdmin />} path={`${BASE_PATH}/*`} />
			</Routes>
		</BrowserRouter>
	);
};
