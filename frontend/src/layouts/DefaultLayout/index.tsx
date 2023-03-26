import { Outlet } from "react-router-dom"
import { Topbar } from "../../components/Topbar"

function DefaultLayout() {
	return (
		<>
			<Topbar />
			<Outlet />
		</>
	)
}

export { DefaultLayout }
