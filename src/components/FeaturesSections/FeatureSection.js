import React from 'react';
import onlineimg from '../../assets/images/icon-online.svg';
import apimg from '../../assets/images/icon-api.svg';
import budgetimg from '../../assets/images/icon-budgeting.svg';
import boardingimg from '../../assets/images/icon-onboarding.svg';
import styles from './FeatureSection.module.scss';

const featuresection = (props) => {
    return (
        <section className={` ${styles.feature}`}>
            <div className='container container__pall'>
                <div className={styles.feature__intro}>
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                    </p>
                </div>

                <div className={styles.feature__grid}>
                    <div className={styles.feature__items}>
                        <div className={styles.feature__icon}>
                            <img src={onlineimg}></img>
                        </div>
                        <div className={styles.feature__title}>
                            Online Banking
                        </div>
                        <div className={styles.feature__description}>
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </div>
                    </div>

                    <div className={styles.feature__items}>
                        <div className={styles.feature__icon}>
                            <img src={budgetimg}></img>
                        </div>
                        <div className={styles.feature__title}>
                            Simple Budgeting
                        </div>
                        <div className={styles.feature__description}>
                            See exactly where your money goes each month. Receive notifications when you’re
                            close to hitting your limits.
                        </div>
                    </div>
                    <div className={styles.feature__items}>
                        <div className={styles.feature__icon}>
                            <img src={boardingimg}></img>
                        </div>
                        <div className={styles.feature__title}>
                            Fast Onboarding
                        </div>
                        <div className={styles.feature__description}>
                            We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.
                        </div>
                    </div>
                    <div className={styles.feature__items}>
                        <div className={styles.feature__icon}>
                            <img src={apimg}></img>
                        </div>
                        <div className={styles.feature__title}>
                            Open API
                        </div>
                        <div className={styles.feature__description}>
                            Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default featuresection;