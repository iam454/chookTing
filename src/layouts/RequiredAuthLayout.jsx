import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, [navigate]);

  return <Outlet />;
}

export default RequiredAuthLayout;
