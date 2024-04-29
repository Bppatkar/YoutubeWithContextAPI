import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex h-full flex-col">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
