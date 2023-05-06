import styles from "./inputslabel.module.scss"

interface InputslabelProps {
	namelabelInp?: string;
	labelerro?: string
}

function Inputslabel(props: InputslabelProps){
	const {namelabelInp, labelerro} = props

	let bordercor, labelcor;

	if(labelerro === "erro"){
		bordercor = '1px solid #e20c0c';
		labelcor = '#e20c0c';
	}
		return(
			<div className={styles.inputslabel}>
				<label className={styles.label} style={{color:labelcor}}>{namelabelInp}</label>
				<input className={styles.inputs} style={{border:bordercor}}></input>
				<div style={{color:labelcor}}>error mensage</div>
			</div>
		);
}

export { Inputslabel }
