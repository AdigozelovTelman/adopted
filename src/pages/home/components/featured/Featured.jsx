import React from 'react'
import styles from './Featured.module.scss'

const Featured = () => {
  return (
    <>
        <div className={styles.container}>
            <h2>Featured Stories</h2>
            <div className={styles.image}>
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg" alt="..." />
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="..." />
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg" alt="..." />
            </div>
        </div>
    </>
  )
}

export default Featured