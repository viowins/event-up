import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Page404 from "./pages/Page404";
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path={"about"} element={<About />} />
        </Route>
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}
