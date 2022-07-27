import TopBar from "./components/topbar/TopBar"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Settings from "./pages/settings/Settings"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <div className="app">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/post/:postID" element={<Single />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App