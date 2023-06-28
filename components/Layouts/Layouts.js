import { useRouter } from "next/router"
import styles from "./Layouts.module.css"
import Header from "../Headers/Headers";

export default function Layout({children}) {

    const router = useRouter();
    const path = router.pathname;

    return (
        <>  
            <div className={styles.main}>
                <Header />
                {children}
            </div>
        </>
    )
}