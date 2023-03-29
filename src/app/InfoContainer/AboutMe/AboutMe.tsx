import Image from "next/image";
import image from "public/tehc.png";
import styles from "../../page.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const ABOUT_ME_TEXT =
  "Nice to meet you. I am a Software Engineer focusing on Full-Stack development. Outside my career, I have my hobbies, which also include working on the occasional coding projects. Even though they often fail, I enjoy learning and experimenting with new ideas, but most of all, I enjoy making dumb and silly projects whenever I can.";

const AboutMe = (): JSX.Element => {
  return (
    <>
      <div className={styles.aboutMeText}>
        <h3 className={inter.className}>{ABOUT_ME_TEXT}</h3>
      </div>
      <Image className={styles.tehc} src={image} alt="tech" priority />
    </>
  );
};

export default AboutMe;
