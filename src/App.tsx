import { Suspense } from "react";
import PrivatRoutes from "routes/PrivatRoutes";
import PublicRoutes from "routes/PublicRoutes";

const App = () => {
  return (
    <Suspense fallback="Loading ...">
      <PublicRoutes />
      {/* <PrivatRoutes /> */}
    </Suspense>
  );
};

export default App;
