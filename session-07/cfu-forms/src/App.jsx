import { useState } from "react";
import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { UsersList } from "./pages/UsersList.jsx";
import { UserDetail } from "./pages/UserDetail.jsx";
import { UserNew } from "./pages/UserNew.jsx";
import { UserEdit } from "./pages/UserEdit.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { users as initialUsers } from "./users.js";

function App() {
  const [users, setUsers] = useState(initialUsers);

  function addUser(user) {
    setUsers([...users, { ...user, id: Date.now() }]);
  }

  function updateUser(updated) {
    setUsers(users.map((u) => (u.id === updated.id ? updated : u)));
  }

  function deleteUser(id) {
    setUsers(users.filter((u) => u.id !== id));
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList users={users} />} />
        <Route path="/users/new" element={<UserNew onAdd={addUser} />} />
        <Route
          path="/users/:userId"
          element={<UserDetail users={users} onDelete={deleteUser} />}
        />
        <Route
          path="/users/:userId/edit"
          element={<UserEdit users={users} onSave={updateUser} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
