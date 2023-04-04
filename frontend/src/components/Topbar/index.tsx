import { MouseEvent, RefObject, useEffect, useRef, useState } from 'react';

import styles from './topbar.module.scss';
import logo from '../../assets/svg/logo.svg';
import menuBurger from '../../assets/svg/menuBurger.svg';
import { Navigate } from './components/Navigate';

function Topbar() {
	const [isMenuBurger, setIsMenuBurger] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});
	const menuBurgerRef = useRef<HTMLSpanElement>(null);

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

	useEffect(() => {
		function handleClickOutsideMenuBurger(event: any): void {
			if (!isClickInsideMenuBurger(event, menuBurgerRef)) {
				setIsMenuOpen(false);
			}
		}

		function isClickInsideMenuBurger(
			event: MouseEvent<Document, MouseEvent>,
			menuBurgerRef: RefObject<HTMLSpanElement>,
		): boolean {
			const targetElement = event.target as Node;
			if (!menuBurgerRef.current) {
				return false;
			}

			return menuBurgerRef.current.contains(targetElement);
		}

		document.addEventListener('click', handleClickOutsideMenuBurger);

		return () => {
			document.removeEventListener('click', handleClickOutsideMenuBurger);
		};
	}, [menuBurgerRef, isMenuOpen]);

	function handleMenuHamburguerClick(event: MouseEvent) {
		const targetElement = event.target as Node;
		if (
			targetElement.textContent !== 'Cadastros' &&
			targetElement.textContent !==
				'CadastrosUsuáriosSetoresProdutosMódulosRotinasSituaçõesVersões'
		) {
			setIsMenuOpen(!isMenuOpen);
		}
	}

	return (
		<header className={styles.topbar}>
			<div className={styles.logoContainer}>
				<img src={logo} alt="Logo WeTesting" />
			</div>
			<div className={styles.navContainer}>
				{isMenuBurger ? (
					<span
						ref={menuBurgerRef}
						className={styles.menuBurger}
						onClick={handleMenuHamburguerClick}
					>
						<img src={menuBurger} />
						{isMenuOpen && (
							<div
								className={`${styles.menuBurgerContent} ${
									isMenuOpen ? styles.menuBurgerContentVisible : ''
								}`}
							>
								<Navigate isMenuBurger={isMenuBurger} />
							</div>
						)}
					</span>
				) : (
					<Navigate />
				)}
			</div>
		</header>
	);
}

export { Topbar };
