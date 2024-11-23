import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";
import { menu } from "./data";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Container className={styles["header__container"]}>
        <Image
          className={styles["header__logo"]}
          src="/logo.svg"
          alt="logo"
          width={160}
          height={49}
          priority
        />
        <nav className={styles["header__nav"]}>
          <ul className={styles["header__menu"]}>
            {menu.map(({ name, href }) => (
              <li className={styles["header__menu-item"]} key={name}>
                <Button>{name}</Button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
