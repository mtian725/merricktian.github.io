import Headshot from "./Headshot";
import InfoContainer from "./InfoContainer/InfoContainer";
import styles from "./page.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Headshot />
      <div className={styles.namecard}>
        <h1 className={inter.className}>Hey there, I&apos;m Merrick Tian</h1>
      </div>
      <InfoContainer />
    </main>
  );
}
