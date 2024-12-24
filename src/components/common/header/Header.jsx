import React from 'react'
import styles from './Header.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <a href=""><FaTwitter /></a>
          <a href=""><FaFacebookF /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaLinkedinIn /></a>
        </div>
        <div className={styles.sponsor}>
          <a href="">Sponsor</a>
          <button>Login</button>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.adopdet}>
          <span>Adopted</span>
        </div>
        <div className={styles.navbar}>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/basket">Adoption</a></li>
              <li><a href="/wishlist">Succes Stories</a></li>
              <li><a href="">About</a></li>
              <li><a href=""> Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header