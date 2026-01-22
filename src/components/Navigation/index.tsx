"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Button from "../Button";
import { menu } from "./data";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menu.map(({ name }, index) => (
          <li className={styles.item} key={name}>
            <Button
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

