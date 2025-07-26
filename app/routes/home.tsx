import Footer from "~/components/Footer";
import type { Route } from "./+types/home";
import Header from "~/components/Header";
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
      <Header />
      <main className="lg:mt-2 lg:border-t border-input">
        <div className="max-lg:hidden mt-6 mb-10">
          <Mainmenu />
        </div>
        <div></div>
      </main>
      <Footer />
    </>
  );
}
