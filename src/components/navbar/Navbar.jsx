import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
