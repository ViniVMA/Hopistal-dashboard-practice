import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../src/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Header />

          <div className="max-w-7xl m-auto ">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
