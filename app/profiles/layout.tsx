import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-20">{children}</div>
      <Footer />
    </>
  );
}
