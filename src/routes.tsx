import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const PRESERVED: {
  [key: string]: { default: React.ComponentType };
} = import.meta.glob("/src/pages/(_app|_404).tsx", {
  eager: true,
});
const ROUTES: {
  [key: string]: { default: React.ComponentType };
} = import.meta.glob("/src/pages/**/[a-z[]*.tsx", {
  eager: true,
});

const preserved: {
  _app?: React.ComponentType;
  _404?: React.ComponentType;
} = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
  return { ...preserved, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: ROUTES[route].default };
});

function App() {
  const App = preserved?.["_app"] || Fragment;
  const NotFound = preserved?.["_404"] || Fragment;
  return (
    <App>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route
            key={path}
            path={`shopediasobu-web/${path}`}
            element={<Component />}
            lazy={() => import(`./pages${path}/index.tsx`)}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  );
}

export default App;
