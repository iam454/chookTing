import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PopPage from "./pages/PopPage/PopPage";
import MyPage from "./pages/MyPage/MyPage";
import NavigationBar from "./components/NavigationBar";
import TestPage from "./pages/TestPage/TestPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import MyDetailPage from "./pages/MyDetailpage/MyDetailPage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pop" element={<PopPage />}>
          <Route path="post/:postId" element={<PopPage />}></Route>
        </Route>
        <Route path="/profile" element={<MyPage />}>
          <Route path="post/:postId" element={<MyDetailPage />}></Route>
        </Route>
        <Route path="/profile/setting" element={<SettingPage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
