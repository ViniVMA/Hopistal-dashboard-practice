import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Table } from "../src/components/Table";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Administração de Pacientes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Table />
    </>
  );
};

export default Home;
