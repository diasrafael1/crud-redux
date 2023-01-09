import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD com Redux Toolkit
      </h1>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
