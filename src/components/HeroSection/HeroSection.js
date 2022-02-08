import React from 'react';
import Button from '../Button/Button';
import styles from './HeroSection.module.scss';

const herosection = (props) => {
    return (
        <section className={`${styles.hero} `}>
            <div className={styles.container}>
                <div className={styles.hero__image} />
                <div className={`${styles.hero__text} ${styles.container__pall}`}>
                    <h1>
                        Next generation
                        digital banking
                    </h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.

                    </p>
                    <Button className={`${styles.button}`}>Request Invite</Button>
                </div>
            </div>


        </section>
    );
}

export default herosection;