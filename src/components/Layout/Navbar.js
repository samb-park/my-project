import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";
import Badge from "../UI/Badge";

const checNavName = (name, state) => {
    if (name === state.menu) {
        return styles.active;
    }
    return styles.deactive;
};

const Navbar = () => {
    const CartList = useSelector((state) => state.addCart);
    const state = useSelector((state) => state);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link
                    className={checNavName("Shop", state.updateHeader)}
                    to="/"
                >
                    Shop
                </Link>

                <Link
                    className={checNavName("Cart", state.updateHeader)}
                    to="/Cart"
                >
                    Cart <Badge>{CartList.length}</Badge>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
