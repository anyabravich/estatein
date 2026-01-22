
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FooterDataMenu, FooterDataSocial } from "./data";
import Input from "../Input";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="logo"
              width={160}
              height={48}
              priority
            />
            <form action="#">
              <Input type="text" />
            </form>
          </div>
          <ul className={styles.menu}>
            {FooterDataMenu.map((item, index) => (
              <li key={index}>
                <ul>
                  {item.map(({ name }, index) => (
                    <li className={styles.item} key={index}>
                      <Link href="/">{name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container className={styles.container}>
          <div className={styles.information}>
            <span>@2023&nbsp;Estatein. All Rights Reserved.</span>
            <span>Terms & Conditions</span>
          </div>
          <ul className={styles.socials}>
            {FooterDataSocial.map((item, index) => (
              <li className={styles.item} key={index}>
                <Image
                  src={`/icons/${item.name}.svg`}
                  alt={item.name}
                  width={24}
                  height={24}
                  priority
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
