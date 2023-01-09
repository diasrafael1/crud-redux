import type { NextPage } from "next";
import Head from "next/head";
import UserList from "../components/UserList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crud Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          CRUD com Redux Toolkit
        </h1>
        <UserList />
      </main>
    </>
  );
};

export default Home;
