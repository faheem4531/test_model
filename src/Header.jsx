
import styles from './Header.module.css'
import Logo from "./images/logo.svg";

const Header = () => {

  return (
    <div className={styles.navBar}>
      <img
        src={Logo}
        className={styles.logo}
      />

      <ul className={styles.linksList}>
        <li className={styles.active}> Home</li>
        <li>Case Studies</li>
        <li>Carrers</li>
        <li className={styles.btn}>Get in Touch</li>
      </ul>
    </div >
  )
};

export default Header;
