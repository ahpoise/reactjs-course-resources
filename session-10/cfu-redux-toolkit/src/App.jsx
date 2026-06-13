import { Catalog } from "./components/Catalog.jsx";
import { Cart } from "./components/Cart.jsx";
import { Total } from "./components/Total.jsx";

function App() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      <section>
        <h2 className="text-lg font-bold mb-2">Produtos</h2>
        <Catalog />
      </section>
      <section>
        <h2 className="text-lg font-bold mb-2">Carrinho</h2>
        <Cart />
        <Total />
      </section>
    </div>
  );
}

export default App;
