import React from 'react';
import currencyimg from '../../assets/images/image-currency.jpg';
import confettiimg from '../../assets/images/image-confetti.jpg';
import planeimg from '../../assets/images/image-plane.jpg';
import restaurantimg from '../../assets/images/image-restaurant.jpg';
import styles from './ArticleSection.module.scss';


const articlesection = (props) => {
    return (
        <section className={styles.article}>
            <div className={'container container__pall'}>
                <h2>Latest Articles</h2>
                <div className={styles.article__grid}>

                    <a href='#' className={styles.article__item}>
                        {/* the reason of using style img insted of src img is that the img width changes in mobile so grid maa padding haru milayo vani afai work garxa */}
                        <div className={styles.article__image} style={{ backgroundImage: `url(${currencyimg})` }}></div>
                        <div className={styles.article__text}>
                            <div className={styles.article__author}>By Claire Robinson</div>
                            <div className={styles.article__title}>Receive money in any currency with no fees</div>
                            <div className={styles.article__description}>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</div>
                        </div>
                    </a>

                    <a href='#' className={styles.article__item}>
                        <div className={styles.article__image} style={{ backgroundImage: `url(${restaurantimg})` }}></div>
                        <div className={styles.article__text}>
                            <div className={styles.article__author}>  By Wilson Hutton</div>
                            <div className={styles.article__title}>Treat yourself without worrying about money</div>
                            <div className={styles.article__description}>Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …</div>
                        </div>
                    </a>

                    <a href='#' className={styles.article__item}>
                        <div className={styles.article__image} style={{ backgroundImage: `url(${planeimg})` }}></div>
                        <div className={styles.article__text}>
                            <div className={styles.article__author}>  By Wilson Hutton</div>
                            <div className={styles.article__title}>Take your Easybank card wherever you go</div>
                            <div className={styles.article__description}>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                while you’re abroad. We’ll even show you …</div>
                        </div>
                    </a>

                    <a href='#' className={styles.article__item}>
                        <div className={styles.article__image} style={{ backgroundImage: `url(${confettiimg})` }}></div>
                        <div className={styles.article__text}>
                            <div className={styles.article__author}> By Claire Robinson</div>
                            <div className={styles.article__title}>Our invite-only Beta accounts are now live!</div>
                            <div className={styles.article__description}>  After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                It’s easy to request an invite through the site ...</div>
                        </div>
                    </a>



                </div>
            </div>
        </section>
    );
};
export default articlesection;