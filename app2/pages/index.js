import Head from "next/head";
import styles from "../styles/Home.module.css";

// We need to use top level await on these modules as they are async.
// This is actually what let's module federation work with NextJS
const Nav = (await import("app1/nav")).default;
const add = (await import("app1/add")).default;
const multiplyByTwo = (await import("app1/multiplyByTwo")).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Container App</title>
      </Head>

      <Nav />
    </div>
  );
}
