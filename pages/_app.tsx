import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../src/components/Header";
import { PacientsProvider } from "../Providers/pacientsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PacientsProvider>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Header />
          <div className="max-w-7xl pt-20 m-auto">
            <Component className="mt-20" {...pageProps} />
          </div>
        </div>
      </div>
    </PacientsProvider>
  );
}

export default MyApp;
