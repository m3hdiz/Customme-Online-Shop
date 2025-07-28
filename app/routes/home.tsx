import Footer from "~/components/Footer";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Mainmenu from "~/components/Main menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="lg:mt-2 lg:border-t border-input">
        <div className="max-lg:hidden mt-6 mb-10 mx-10vw">
          <Mainmenu />
        </div>
        <div></div>
      </header>
      <main></main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}
