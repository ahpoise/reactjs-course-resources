import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { UsersList } from "./pages/UsersList.jsx";
import { UserDetail } from "./pages/UserDetail.jsx";
import { UserNew } from "./pages/UserNew.jsx";
import { UserEdit } from "./pages/UserEdit.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// Zero state, zero handlers: o state dos utilizadores vive no <UsersProvider>.
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/new" element={<UserNew />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users/:userId/edit" element={<UserEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
