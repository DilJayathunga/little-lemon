
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div></div>
            <div className={styles.container}>
                <img src="./logo.svg" alt="logo" />
                <ul className={styles.navElements}>
                    <li>
                        <Link to="/" className={styles.element}>Home</Link>
                    </li>
                    <li>
                        {/*<Link to="/#about" className={styles.element}>About</Link>*/}
                        <a className={styles.element} href="/#about">About</a>
                    </li>
                    <li>
                        <a className={styles.element} href="/#menu">Menu</a>
                    </li>
                    <li>
                        <Link to="/booking" className={styles.element}>Reservations</Link>
                    </li>
                    <li>
                        <Link to="/oder" className={styles.element}>Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login" className={styles.element}>Login</Link>
                    </li>
                </ul>
            </div>
            <div></div>
        </nav>
    );
}

export default Nav;