import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        className="image"
        src="/logo.svg"
        alt="Estatein Logo"
        width={160}
        height={49}
        priority
      />
    </Link>
  );
};

export default Logo;

