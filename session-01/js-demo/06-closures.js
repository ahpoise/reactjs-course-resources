// =============================================================
// 06 · Closures
// =============================================================
//
// Closure: função que "se lembra" das variáveis do scope onde foi definida,
// mesmo depois desse scope ter terminado. É o mecanismo que permite a React
// preservar dados entre renders.

console.log("[06] closures");

function createCounter() {
  let count = 0; // capturado pela closure
  return function () {
    count = count + 1;
    return count;
  };
}

const counter = createCounter();
console.log("counter:", counter()); // 1
console.log("counter:", counter()); // 2
console.log("counter:", counter()); // 3
