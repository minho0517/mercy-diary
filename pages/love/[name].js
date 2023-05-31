import styles from "@/styles/Love.module.css";
import { useRouter } from "next/router";

export default function Love() {

    const router = useRouter();
    const name = router.query.name

    return (
        <>
        {name}
        </>
    )
}