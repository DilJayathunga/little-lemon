
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
const Nav = () => {

    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0)

    const headerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollPosition > window.scrollY) {
                headerRef.current.style.transform = 'translateY(0)'
            } else if (scrollPosition < window.scrollY) {
                headerRef.current.style.transform = 'translateY(-200px)'
            }
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition])

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
            <nav ref={headerRef}>
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