import { Navigate, Outlet, useLocation } from "react-router-dom";

import { suspend } from "suspend-react";
import useAuthStore from "../../store/authStore";

interface IPrivateRouteProps {
  fallbackUrl: string;
}
const PrivateRoutes = ({ fallbackUrl }: IPrivateRouteProps) => {
  const { user, getUser } = useAuthStore();
  const { pathname } = useLocation();
  const location = useLocation();

  async function fup() {
    return getUser();
  }

  suspend(fup, ["intial-user-load-pivate-routes"]);

  console.log({ user });

  return user && user.id ? (
    <Outlet />
  ) : (
    <Navigate
      to={location?.state?.from ?? fallbackUrl}
      state={{
        from: pathname,
      }}
    />
  );
};

export default PrivateRoutes;
