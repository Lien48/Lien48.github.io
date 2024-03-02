import "./App.css";
import Root from "./components/root";
import Contact from "./pages/contact";
import About from "./pages/about/index";
import Projects from "./pages/projects";
import Home from "./pages/home/index";

// Add react-router-dom imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// create router with JSX Route elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
