import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function useGlobalContext() {
	const context = useContext(GlobalContext);
	return context;
}
export { useGlobalContext };
