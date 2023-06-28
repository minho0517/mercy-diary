import Link from "next/link";
import styles from "./Headers.module.css"

export default function Header() {

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.title}>Love Story in Mercy</Link>
        </header>
    )
}