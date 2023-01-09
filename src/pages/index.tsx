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

      <UserList />
    </>
  );
};

export default Home;
