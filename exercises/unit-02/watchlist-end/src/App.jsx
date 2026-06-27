import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { WatchlistPage } from "./pages/WatchlistPage.jsx";
import { ItemNew } from "./pages/ItemNew.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/new" element={<ItemNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
