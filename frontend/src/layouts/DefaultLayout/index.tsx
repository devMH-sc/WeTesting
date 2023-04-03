import { Outlet } from "react-router-dom"
import { Topbar } from "../../components/Topbar"

import styles from './defaultLayout.module.scss'

function DefaultLayout() {
	return (
		<>
			<Topbar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	)
}

export { DefaultLayout }
