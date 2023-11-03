import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function RequiredAuthLayout() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  return <Outlet />;
}

export default RequiredAuthLayout;
