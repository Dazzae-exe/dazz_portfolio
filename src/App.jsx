import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import RootLayout from "./layout/root-layout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Portfolio />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
