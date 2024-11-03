import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import RootLayout from "./layout/root-layout";
import BlogPost from "./pages/blog-post";
import { PortfolioContext } from "./context";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Portfolio />} />
      <Route path="/blog-post/:id" element={<BlogPost />} />
    </Route>
  )
);

function App() {
  return (
    <PortfolioContext>
      <RouterProvider router={routes} />
    </PortfolioContext>
);
}

export default App;
