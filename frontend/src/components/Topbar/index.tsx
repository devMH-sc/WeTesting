import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuDropdown } from './components/MenuDropdown';
import { MenuDropdownList } from './components/MenuDropdownList';

import styles from './topbar.module.scss';
import logo from '../../assets/svg/logo.svg';
import menuBurger from '../../assets/svg/menuBurger.svg';

function Topbar() {
	const [isMenuBurger, setIsMenuBurger] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});
	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && isMenuBurger) {
			setIsMenuBurger(false);
		}
	}, [size.width, isMenuBurger]);

	useEffect(() => {
		if (size.width <= 768) {
			setIsMenuBurger(true);
		}
	}, [size.width, isMenuBurger]);

	function handleMenuHamburguerClick() {
		setIsMenuOpen(!isMenuOpen);
	}

	function handleMenuClick(path: string) {
		navigate(path);
	}

	function handleExitClick() {
		//Revogar token de acesso do usuário

		handleMenuClick('login');
	}

	return (
		<header className={styles.topbar}>
			<div className={styles.logoContainer}>
				<img src={logo} alt="Logo WeTesting" />
			</div>
			<div className={styles.navContainer}>
				{isMenuBurger ? (
					<button
						className={styles.menuBurger}
						onClick={handleMenuHamburguerClick}
					>
						<img src={menuBurger} />
					</button>
				) : (
					<>
						<span onClick={() => handleMenuClick('tasks')}>Lançamentos</span>
						<MenuDropdown title="Cadastros" content={<MenuDropdownList />} />
						<span onClick={handleExitClick}>Sair</span>
					</>
				)}
			</div>
		</header>
	);
}

export { Topbar };
