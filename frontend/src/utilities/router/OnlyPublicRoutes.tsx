import { Navigate, Outlet, useLocation } from "react-router-dom";
import { suspend } from "suspend-react";
import useAuthStore from "../../store/authStore";

const OnlyPublicRoutes = ({ fallbackUrl }: { fallbackUrl: string }) => {
  const { user, getUser } = useAuthStore();
  const location = useLocation();

  async function fup() {
    return getUser();
  }

  suspend(fup, ["intial-user-load-only-public-routes"]);

  return user && user.id ? (
    <Navigate to={location?.state?.from ?? fallbackUrl} />
  ) : (
    <Outlet />
  );
};

export default OnlyPublicRoutes;
