import { useNavigate } from 'react-router-dom';

import { MenuDropdown } from '../MenuDropdown';
import { MenuDropdownList } from '../MenuDropdownList';

interface NavigateProps {
	isMenuBurger?: boolean;
}

function Navigate(props: NavigateProps) {
	const { isMenuBurger } = props;
	const navigate = useNavigate();

	function handleMenuClick(path: string) {
		navigate(path);
	}

	function logout() {
		//Revogar token de acesso do usuário

		handleMenuClick('login');
	}
	return (
		<>
			<span onClick={() => handleMenuClick('tasks')}>Lançamentos</span>
			<MenuDropdown
				title="Cadastros"
				isMenuBurger={isMenuBurger}
				content={<MenuDropdownList />}
			/>
			<span onClick={logout}>Sair</span>
		</>
	);
}
export { Navigate };
