import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Login from "../pages/Login";

const useAuth = () => {
  let token = sessionStorage.getItem("userLogin");
  return token;
};

const useSession = () => {
  const token = useAuth();
  const navigate = useNavigate();
  const [decodedSession, setDecodedSession] = useState(null);

  useEffect(() => {
    const decodeToken = async () => {
      try {
        if (token) {
          const decoded = await jwt_decode(token);
          setDecodedSession(decoded);
        } else {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.log(error);
        navigate("/login", { replace: true });
      }
    };

    decodeToken();
  }, [navigate, token]);

  return decodedSession;
};

export default function ProtectedRoutes() {
  const session = useSession();
  const isAuthorized = !!session;

  console.log(session);
  console.log(isAuthorized);

  return isAuthorized ? <Outlet /> : <Login />;
}
