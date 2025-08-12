import styles from './Home.module.css'; // or './Home.css'

const Home = () => {
    return (
        <main className={styles.container}>
            <h1>Welcome to My Portfolio</h1>
            <section>
                <p>Your introduction goes here...</p>
            </section>
        </main>
    );
};

export default Home;