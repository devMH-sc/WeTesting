import styles from "./bottons.module.scss";

interface BottonsProps{
	namebot?: string;
}

function Bottons(props: BottonsProps){
	const {namebot} = props;
	return(
		<div>
			<button className={styles.bottons}>{namebot}</button>
		</div>
	)
}

export { Bottons }
