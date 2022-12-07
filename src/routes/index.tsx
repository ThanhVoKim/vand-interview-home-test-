import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SuspenseElement from 'components/SuspenseElement';

const Home = lazy(() => import('pages/Home'));

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<SuspenseElement>
							<Home />
						</SuspenseElement>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
