import { ReactNode } from "react";
import styles  from "./inputs.module.scss";

interface InputsProps {
  placeInp?: string;
  children: ReactNode;
}

function Inputs(props: InputsProps){
  const {placeInp, children} = props

	return(
		<div>
			{children && <input className={styles.inputs} placeholder={placeInp}></input>}
		</div>
  );
}

export { Inputs };
