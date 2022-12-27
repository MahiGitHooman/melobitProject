import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home page route we can access by / or /home to home page */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
