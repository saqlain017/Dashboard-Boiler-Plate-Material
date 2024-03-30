import { Routes, Route, Navigate } from "react-router-dom";
import routes from "@/routes";
import { useSelector } from "react-redux";

export function Auth() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {routes.map(({ layout, pages }) =>
          layout === "auth" &&
          pages.map(({ path, element }) => (
            <Route
              key={path}
              exact
              path={path}
              element={
                path === "/sign-in" && isLoggedIn ? (
                  <Navigate to="/dashboard/home" />
                ) : (
                  element
                )
              }
            />
          ))
        )}
      </Routes>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
