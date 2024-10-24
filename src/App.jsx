import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import RootLayout from "./layout/root-layout";
import BlogPost from "./pages/blog-post";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Portfolio />} />
      <Route path="/blog-post/:id" element={<BlogPost />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
