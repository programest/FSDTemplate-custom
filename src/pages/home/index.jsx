
import styles from "./styles.module.scss";
import logo from '../../logo.svg'

const Home = () => {
    return(
        <div className={styles.app}>
        <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
                <p>
                Шаблон Feature-Sliced Design React,SCSS,Redux
                </p>
                <a
                className={styles.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header> 
        </div>
    )

}
export default Home;