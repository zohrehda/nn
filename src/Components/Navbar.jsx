import Link from "next/link";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <h1>Caputar</h1>
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/">Home </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
