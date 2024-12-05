import { Navigate, Outlet } from "react-router-dom";import { getUserInfo } from "../services/auth-service";

export const ProtectedRoutes = () => {
    const user = getUserInfo();

    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}