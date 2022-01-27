import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>next.js / react-three-fiber with typescript</title>
        <meta name="description" content="next.js / react-three-fiber with typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>next.js / react-three-fiber with typescript</h1>
      </main>
    </div>
  );
};

export default Home;
