import React from 'react'
import { FaHeart } from "react-icons/fa";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart /> by <span>Colorlib</span> </p>
    </div>
    </>
  )
}

export default Footer