import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

const Header = () => {
    const updateHeader = useSelector((state) => state.updateHeader);
    const { name, title, description} = updateHeader;
    return (
        <header>
            <h3 className={styles.name}>{name}</h3>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
        </header>
    );
};

export default Header;
