import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ArticleList from "./pages/article/ArticleList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
