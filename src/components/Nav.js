
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <img src="./Logo.svg" alt="logo" />

            <ul className={styles.navElements}>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order Online</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;