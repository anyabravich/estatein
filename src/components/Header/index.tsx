"use client";

import styles from "./page.module.scss";
import Container from "../Container";
import Button from "../Button";
import Navigation from "../Navigation";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        
        <Navigation />

        <Button className={styles.contact} styled="outline">
          Contact Us
        </Button>
      </Container>
    </header>
  );
};

export default Header;
