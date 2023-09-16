import { lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const Home = lazy(() => import("pages/Home"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));

const PublicRoutes: React.FC = () => {
  const location = useLocation();
  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.productDetails} element={<ProductDetails />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
