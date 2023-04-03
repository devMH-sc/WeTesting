import {
	MouseEvent,
	ReactNode,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';

import styles from './menuDropdown.module.scss';
import chevron from '../../../../assets/svg/Chevron.svg';

interface menuDropdownProps {
	title: string;
	content: ReactNode;
}

function MenuDropdown(props: menuDropdownProps) {
	const { title, content } = props;

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		function handleClickOutsideDropdown(event: any): void {
			if (!isClickInsideDropdown(event, dropdownRef)) {
				setIsDropdownOpen(false);
			}
		}

		function isClickInsideDropdown(
			event: MouseEvent<Document, MouseEvent>,
			dropdownRef: RefObject<HTMLSpanElement>,
		): boolean {
			const targetElement = event.target as Node;
			if (!dropdownRef.current) {
				return false;
			}

			return dropdownRef.current.contains(targetElement);
		}

		document.addEventListener('click', handleClickOutsideDropdown);

		return () => {
			document.removeEventListener('click', handleClickOutsideDropdown);
		};
	}, [dropdownRef, isDropdownOpen]);

	function handleDropdownToggle() {
		setIsDropdownOpen(!isDropdownOpen);
	}

	return (
		<span
			ref={dropdownRef}
			className={styles.dropdown}
			onClick={handleDropdownToggle}
		>
			{title}
			<img
				src={chevron}
				className={isDropdownOpen ? styles.DropdownActive : ''}
			/>
			<div
				className={`${styles.dropdownContent} ${
					isDropdownOpen ? styles.dropdownContentVisible : ''
				}`}
			>
				{content}
			</div>
		</span>
	);
}

export { MenuDropdown };
