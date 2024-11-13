import styles from "./DropDownMenu.module.css";
import { useState, useRef, useEffect, Children } from "react";

export default function DropDownMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();
  const menuButtonRef = useRef();

  function closeOnClickOutside(e) {
    if (menuOpen && !menuRef.current?.contains(e.target) && !menuButtonRef.current?.contains(e.target)) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeOnClickOutside);
    };
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <p className={styles.header} onClick={(event) => toggleMenu(event)} ref={menuButtonRef}>
        {props.header}
      </p>
      <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`} ref={menuRef}>
        {Children.map(props.children, (child) => (
          <li onClick={(event) => toggleMenu(event)}>{child}</li>
        ))}
      </ul>
    </>
  );
}
