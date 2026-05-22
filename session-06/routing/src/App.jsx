import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { UsersList } from "./pages/UsersList.jsx";
import { UserDetail } from "./pages/UserDetail.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
