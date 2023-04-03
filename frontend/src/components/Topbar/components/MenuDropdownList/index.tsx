import { useNavigate } from 'react-router-dom';

import styles from './menuDropdownlist.module.scss';

type OptionProps = {
	label: string;
	path: string;
};

function MenuDropdownList() {
	const navigate = useNavigate();

	const options: OptionProps[] = [
		{ label: 'Usuários', path: '/users' },
		{ label: 'Setores', path: '/departments' },
		{ label: 'Produtos', path: '/products' },
		{ label: 'Módulos', path: '/modules' },
		{ label: 'Rotinas', path: '/scripts' },
		{ label: 'Situações', path: '/status' },
		{ label: 'Versões', path: '/versions' },
	];

	function handleOptionClick(path: string) {
		navigate(path);
	}

	return (
		<div>
			{options?.map(option => (
				<button
					className={styles.dropdownItem}
					key={option.path}
					onClick={() => handleOptionClick(option.path)}
					type="button"
				>
					{option.label}
				</button>
			))}
		</div>
	);
}

export { MenuDropdownList };
