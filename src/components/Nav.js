
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";
const Nav = () => {

    const [open, setOpen] = useState(false);

    const list =
    <ul className={!open ? styles.navElements: styles.navElementsMenu}>
        <li>
            <Link to="/" className={styles.element} onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
            <a className={styles.element} href="/#about" onClick={() => setOpen(false)}>About</a>
        </li>
        <li>
            <a className={styles.element} href="/#menu" onClick={() => setOpen(false)}>Menu</a>
        </li>
        <li>
            <Link to="/booking" className={styles.element} onClick={() => setOpen(false)}>Reservations</Link>
        </li>
        <li>
            <Link to="/oder" className={styles.element} onClick={() => setOpen(false)}>Order Online</Link>
        </li>
        <li>
            <Link to="/login" className={styles.element} onClick={() => setOpen(false)}>Login</Link>
        </li>
    </ul>

        return (
        <>
            <nav>
                <div></div>
                <div className={styles.container}>
                    <Link to="/" className={styles.element}><img src="/logo.svg" alt="logo" /></Link>
                    <img onClick={() => setOpen(true)} className={styles.menu} src="/menu.svg" alt="menu" />
                    {!open && list}
                </div>
                <div></div>
            </nav>
            {open && <div className={styles.modal} id="myModal" onClick={() => setOpen(false)}>
                <div className={styles.modalContent}>
                    {list}
                </div>
            </div>}
        </>
    );
}

export default Nav;