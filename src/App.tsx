import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoutes } from './auth/ProtectedRoutes'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}/>
				<Route element={<ProtectedRoutes />}>
					<Route path="/" element={
						<>
							<Header></Header>
							<Home></Home>
						</>
					}/>
				</Route>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	)
}

export default App
