import styles from './internalButton.module.scss';

export enum ButtonType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface InternalButtonProps {
	form?: string;
	icon?: string;
	label: string;
	onClick: (props?: any) => any;

	type: ButtonType;
	color?: string;
	background?: string;
	maxWidth?: string;
}

function InternalButton(props: InternalButtonProps) {
	const { form, icon, label, onClick, type, color, background, maxWidth } =
		props;

	let customStyleButton = {};
	if (background || maxWidth) {
		background
			? (customStyleButton = { ...customStyleButton, background: background })
			: null;
		maxWidth
			? (customStyleButton = { ...customStyleButton, maxWidth: maxWidth })
			: null;
	}

	return (
		<button
			form={form}
			className={`${styles.internalButton} ${
				type === ButtonType.PRIMARY
					? styles.buttonPrimary
					: styles.buttonSecondary
			}`}
			style={Object.keys(customStyleButton).length > 0 ? customStyleButton : {}}
			onClick={onClick}
		>
			{icon && <img src={icon} className={styles.icon} />}
			<span className={styles.label} style={color ? { color: color } : {}}>
				{label}
			</span>
		</button>
	);
}

export { InternalButton };
