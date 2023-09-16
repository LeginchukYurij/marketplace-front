import { AppGlobalStyles, Footer } from "App.styled";
import Header from "features/Header";
import { Suspense } from "react";
import PrivatRoutes from "routes/PrivatRoutes";
import PublicRoutes from "routes/PublicRoutes";

const App = () => {
  return (
    <>
      <AppGlobalStyles />

      <Header />

      <Suspense fallback="Loading ...">
        <PublicRoutes />
        {/* <PrivatRoutes /> */}
      </Suspense>

      <Footer>Marketplace</Footer>
    </>
  );
};

export default App;
