import styles from "./seconbottons.module.scss"

interface seconbuttonsProps{
	buttonsName?: string;
}

function Seconbuttons(props: seconbuttonsProps){
	const {buttonsName} = props;

	return(
		<div>
			<button className={styles.seconbuttons}>{buttonsName}</button>
		</div>
	);
}

export { Seconbuttons }
