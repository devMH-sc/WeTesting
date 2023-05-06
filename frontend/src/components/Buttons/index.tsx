import chevron from '../../../src/assets/svg/chevron.svg';
import styles from "./bottons.module.scss";

interface ButtonsProps{
	nameBot?: string;
	iconbutton?: string;
}

let resultado;

function Buttons(props: ButtonsProps){
	const {nameBot, iconbutton} = props;

	if(iconbutton === "icon"){
		resultado = <button className={styles.button}><img src={chevron} className={styles.iconbutton} />{nameBot}</button>
	} else{
		resultado = <button className={styles.button}>{nameBot}</button>
	}

	return(
			<div>{resultado}</div>
	);
}

export { Buttons }
