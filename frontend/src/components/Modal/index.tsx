import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import close from '../../assets/svg/close.svg';
import styles from './modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	closeButton?: boolean;

	id: string;
	title: string;

	children: ReactNode;
}

function Modal(props: ModalProps) {
	const {
		isOpen = false,
		onClose,
		id,
		title,
		closeButton = true,
		children,
	} = props;

	if (isOpen === false) {
		return null;
	}

	function modalComponent() {
		return (
			<div id={`modal-${id}`} className={styles.background}>
				<div className={styles.modal}>
					<span className={styles.header}>
						<h1 className={styles.title}>{title}</h1>
						{closeButton ? (
							<button className={styles.close} onClick={onClose}>
								<img src={close} />
							</button>
						) : null}
					</span>
					{children}
				</div>
			</div>
		);
	}

	return ReactDOM.createPortal(modalComponent(), document.body);
}

export { Modal };
