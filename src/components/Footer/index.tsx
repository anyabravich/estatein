import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FooterDataMenu, FooterDataSocial } from "./data";
import Input from "../Input";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__main"]}>
        <Container className={styles["footer__main-container"]}>
          <div className={styles["footer__main-content"]}>
            <Image
              className={styles["footer__logo"]}
              src="/logo.svg"
              alt="logo"
              width={160}
              height={48}
              priority
            />
            <form className={styles["footer__form"]} action="#">
              <Input type="text" label="Subscribe to our newsletter" />
            </form>
          </div>
          <ul className={styles["footer__menu"]}>
            {FooterDataMenu.map((item, index) => (
              <li key={index}>
                <ul className={styles["footer__menu-list"]}>
                  {item.map(({ name }, index) => (
                    <li
                      className={`${styles["footer__menu-item"]}`}
                      key={index}
                    >
                      <Link href="/">{name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className={styles["footer__bottom"]}>
        <Container className={styles["footer__bottom-container"]}>
          <div className={styles["footer__information"]}>
            <span>@2023&nbsp;Estatein. All Rights Reserved.</span>
            <span>Terms & Conditions</span>
          </div>
          <ul className={styles["footer__socials"]}>
            {FooterDataSocial.map((item, index) => (
              <li className={styles["footer__socials-item"]} key={index}>
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
