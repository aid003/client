import React from 'react';
import styles from '../styles/Header.module.css'
import avatar from '../images/avatar.png'

const Header = (props) => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.burger}>
                    <span className={styles.one}></span>
                    <span className={styles.two}></span>
                    <span className={styles.three}></span>
                </div>
                <button className={styles.se}>SE</button>
                <form className={styles.searher}>
                    <div className={styles.icon}>
                        <img></img>
                    </div>
                    <input className={styles.searh} value='Поиск...'></input>
                </form>
                <div className={styles.amount}>7377$</div>
                <div className={styles.avatar}>
                    <img src={avatar}></img>
                </div>
                <div className={styles.arrow}>
                    <span className={styles.four}></span>
                    <span className={styles.five}></span>
                </div>
            </div>
            {props.children}
        </React.Fragment>
    )
}

export default Header;