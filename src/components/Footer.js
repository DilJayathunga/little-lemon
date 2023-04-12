import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <img src="./Logo.svg" alt="logo" />
                <div className={styles.section}>
                    <h4>Doormat Navigation</h4>
                    <ul>
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
                </div>
                <div className={styles.section}>
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <a>Address</a>
                        </li>
                        <li>
                            <a>Phone Number</a>
                        </li>
                        <li>
                            <a>Email</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>
                            <a>Facebook</a>
                        </li>
                        <li>
                            <a>Twitter</a>
                        </li>
                        <li>
                            <a>Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;