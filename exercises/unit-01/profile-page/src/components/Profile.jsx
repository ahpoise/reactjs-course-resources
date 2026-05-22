import { Header } from "./Header.jsx";
import { About } from "./About.jsx";
import { Skills } from "./Skills.jsx";
import { Footer } from "./Footer.jsx";

export function Profile({ name, role }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Header name={name} role={role} />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
