"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setscrolled] = useState(false);
  const changeColor = () => {};
  useEffect(() => {
    if (window.scrollY > 90)
      window.addEventListener("scroll", () => setscrolled(true));
  }, []);
  return (
    <>
      <nav
        className={styles.nav}
        style={{ backgroundColor: scrolled ? "#fff" : "transparent" }}
      >
        <div className={styles.container}>
          <h1>Caputar</h1>
          <div
            className={styles.hamburger}
            onClick={() => setOpenNav((prev) => !prev)}
          >
            {openNav ? (
              <AiOutlineClose fontSize={30} />
            ) : (
              <AiOutlineMenu fontSize={30} />
            )}
          </div>
          <div
            className={`${styles.navList}  ${
              openNav ? styles["navList--active"] : ""
            } `}
          >
            <ul>
              <li>
                <Link href="/">Home</Link>{" "}
              </li>
              <li>
                <Link href="/">Gallery</Link>{" "}
              </li>
              <li>
                <Link href="/">Work</Link>{" "}
              </li>
              <li>
                <Link href="/">Contact</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
