import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Input></Input>
      </main>
    </div>
  );
};

export default Home;
