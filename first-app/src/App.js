import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <MyNav />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />

          {/* ROUTE PAGINA "TRADECORNER" */}
          <Route path="/tradecorner" element={<div className="bg-black"><TradeCorner /></div>} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/newpost" element={<NewPost />} />
          
          {/* ROUTE PER REGISTER/LOGIN */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
