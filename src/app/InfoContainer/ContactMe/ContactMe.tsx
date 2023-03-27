import Image from "next/image";
import styles from "../../page.module.scss";
import github from "public/Logos/github-mark.png";
import linkedin from "public/Logos/LI-In-Bug.png";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Must do static import
// https://nextjs.org/docs/basic-features/image-optimization#local-images
const Contacts = [
  {
    src: "github",
    path: github,
    link: "https://github.com/mtian725",
  },
  {
    src: "linkedin",
    path: linkedin,
    link: "https://www.linkedin.com/in/merricktian/",
  },
];

const CONTACTS_TEXT = "Come find and reach out here";

const contactComponents = Contacts.map((contact) => (
  <a href={contact["link"]} key={contact["src"]} target="_blank">
    <Image
      className={styles.links}
      src={contact["path"]}
      alt={contact["src"]}
      priority
    />
  </a>
));

const ContactMe = (): JSX.Element => {
  return (
    <>
      <div className={styles.contactText}>
        <h3 className={inter.className}>{CONTACTS_TEXT}</h3>
      </div>
      <div className={styles.contactItemContainer}>{contactComponents}</div>
    </>
  );
};

export default ContactMe;
