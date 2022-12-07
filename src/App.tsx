import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { apiSlice } from 'redux/services/api';
import { store } from 'redux/store';

import Routers from 'routes';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ApiProvider api={apiSlice}>
				<Routers />
			</ApiProvider>
		</Provider>
	);
};

export default App;
