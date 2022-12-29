import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { apiSlice } from "./features/api/apiSlice";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(apiSlice.endpoints.getNewestSongs.initiate());
store.dispatch(apiSlice.endpoints.getTrendingArtist.initiate());
store.dispatch(apiSlice.endpoints.getTodayTrendingSongs.initiate());
store.dispatch(apiSlice.endpoints.getWeekTrendingSongs.initiate());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
