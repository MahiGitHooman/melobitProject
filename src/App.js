import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import SongDetails from "./components/SongDetails";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page route we can access by / or /home to home page */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          {/* Search page */}
          <Route path="/search">
            <Route index element={<SearchPage />} />
            <Route path=":id" element={<SongDetails />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
