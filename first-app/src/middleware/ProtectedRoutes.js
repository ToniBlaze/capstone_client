import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import Login from '../pages/Login';

const useAuth = () => {
    let token = localStorage.getItem("userLogin")
    return token
}

const useSession = () => {
    const session = useAuth()
    const decodedSession = session ? jwt_decode(session) : null
    const navigate = useNavigate()
    useEffect(() => {
        if (!session) {
            navigate("/login", {replace: true})
        }
    },[navigate,session])
    return decodedSession
}

export default function ProtectedRoutes() {
  const isAuthorized = useAuth()
  const session = useSession()
  console.log(session);
  console.log(isAuthorized);

  return isAuthorized ? <Outlet /> : <Login />
}
