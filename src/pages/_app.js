import Copyright from "@/components/global/copyright/Copyright";
import FloatingWidgets from "@/components/global/floating-widgets/FloatingWidgets";
import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <div className="mb-6">
          <Component {...pageProps} />
        </div>
        <div className="mb-6">
          <Footer />
        </div>
        <Copyright />
      </div>
      {/* FLoating Widgets */}
      <FloatingWidgets />
    </>
  );
}
