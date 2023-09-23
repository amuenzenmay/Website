import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Its Game Time!</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}  ${utilStyles.third}`}>
                <h2 className={utilStyles.headingLg}>Sports</h2>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                    <h3 className={utilStyles.headingMd}>Immaculate Grid</h3>
                        <a href="https://www.immaculategrid.com/football" target="_blank" rel="noopener noreferrer"> NFL</a>
                        <br />
                        <a href="https://dynasty-daddy.com/gridiron" target="_blank" rel="noopener noreferrer"> NFL (Gridiron)</a>
                        <br />
                        <a href="https://www.immaculategrid.com/baseball" target="_blank" rel="noopener noreferrer"> MLB</a>
                        <br />
                        <a href="https://www.immaculategrid.com/basketball/mens" target="_blank" rel="noopener noreferrer"> NBA</a>
                        <br />
                        <a href="https://www.immaculategrid.com/hockey" target="_blank" rel="noopener noreferrer"> NHL</a>
                        <br />
                        <a href="https://www.immaculategrid.com/basketball/womens" target="_blank" rel="noopener noreferrer"> WNBA</a>
                        <br />
                        <a href="https://www.immaculatefooty.com/" target="_blank" rel="noopener noreferrer"> Soccer</a>
                    </li>
                    <li className={utilStyles.listItem}>
                    <h3 className={utilStyles.headingMd}>Guess the Player</h3>
                        <a href="https://www.weddlegame.com/" target="_blank" rel="noopener noreferrer"> NFL</a>
                        <br />
                        <a href="https://www.mlbpickle.com/" target="_blank" rel="noopener noreferrer"> MLB</a>
                        <br />
                        <a href="https://poeltl.dunk.town/" target="_blank" rel="noopener noreferrer"> NBA</a>
                        <br />
                        <a href="https://www.hertl.app/" target="_blank" rel="noopener noreferrer"> NHL</a>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
