import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";

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
        />
      </Container>
    </header>
  );
};

export default Header;
