import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD com Redux Toolkit
      </h1>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}

export default MyApp;
