import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./pages/routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ component: Component, path, ...rest }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
