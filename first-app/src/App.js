import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./middleware/ProtectedRoutes";

// PAGES
import ErrorPage from "./pages/ErrorPage";
import PostDetails from "./pages/TradeCorner/PostDetails";
import NewPost from "./pages/TradeCorner/NewPost";

// COMPONENTS
import MyNav from "./components/MyNav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TradeCorner from "./pages/TradeCorner/TradeCorner";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import UserPosts from "./components/TradeCornerComponents/UserPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

          {/* ***  ROTTE PROTETTE  *** */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/tradecorner" element={<TradeCorner />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route
                path="/userposts"
                element={<UserPosts/>}
              />
        </Route>

        {/* ***  ROTTA DI ERRORE  *** */}
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
