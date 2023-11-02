import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const TopAnimePage = lazy(() => import("./pages/TopAnimePage"));
const AnimePage = lazy(() => import("./pages/AnimePage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/top-anime" element={<TopAnimePage />} />
          <Route path="/anime" element={<AnimePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
