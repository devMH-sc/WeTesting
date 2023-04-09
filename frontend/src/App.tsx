import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/global.scss';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</GlobalProvider>
	);
}

export { App };
