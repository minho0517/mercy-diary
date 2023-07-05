import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./History.module.css";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function LoveHistoty() {
    return (
        <div className={styles.container}>
            <div className={styles.option_container}>
                <div className={styles.option_wrapper}>
                    <div className={styles.optionBox}>
                        <button className={`${styles.option} ${styles.selected}`}>2023</button>
                        <button className={styles.option}>2022</button>
                    </div>
                    <div className={styles.filterBox}>
                        <div className={styles.currentFilter}><FontAwesomeIcon icon={faSort} /><span className={styles.filter_text}>최신순</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {LoveHistoty};