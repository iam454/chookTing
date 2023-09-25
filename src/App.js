import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PopPage from "./pages/PopPage/PopPage";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pop" element={<PopPage />}></Route>
        <Route path="/profile" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
