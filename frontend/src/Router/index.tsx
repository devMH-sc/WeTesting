import { Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Departments } from '../pages/Departments'
import { Users } from '../pages/Users'
import { Products } from '../pages/Products'
import { Modules } from '../pages/Modules'
import { Scripts } from '../pages/Scripts'
import { Status } from '../pages/Status'
import { Versions } from '../pages/Versions'
import { Tasks } from '../pages/Tasks'
import { DefaultLayout } from '../layouts/DefaultLayout'


function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/Login" element={<Login />} />
				<Route path="/departments" element={<Departments />} />
				<Route path="/users" element={<Users />} />
				<Route path="/products" element={<Products />} />
				<Route path="/modules" element={<Modules />} />
				<Route path="/scripts" element={<Scripts />} />
				<Route path="/status" element={<Status />} />
				<Route path="/versions" element={<Versions />} />
				<Route path="/tasks" element={<Tasks />} />
			</Route>
		</Routes>
	)
}

export { Router }
