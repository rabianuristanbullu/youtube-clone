import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import { ContextProvider } from "./context/contextApi";
import "./styles.css"
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/search-result/:query" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
