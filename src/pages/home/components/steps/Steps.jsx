import React from 'react'
import styles from './Steps.module.scss'
import family from './assets/Screenshot 2024-12-24 170507.png'

const Steps = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={family} alt="sekil" />
                    <div className={styles.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
                        <button>Adopt a child now</button>
                    </div>
                </div>
                <div className={styles.step}>
                    <h2>Steps to adopt & foster a child</h2>
                    <div className={styles.start}>
                        <p>1.Getting Started</p>
                    </div>
                    <div className={styles.start}>
                        <p>2. Envisioning your family</p>
                    </div>
                    <div className={styles.start}> 
                     <p> 3. Getting approved</p>
                    </div>
                    <div className={styles.start}>
                        <p>4. Being matched with a child</p>
                    </div>
                    <div className={styles.start}>
                        <p>
                        5. Receiving a placement
                    </p>
                    </div>
                    <div className={styles.start}>
                        <p>
                        6. Finalizing an adoption
                    </p>
                    </div>
                    <div className={styles.start}>
                        <p>
                    7. State information
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps