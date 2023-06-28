import styles from "@/styles/Love.module.css";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMobileButton, faMobileScreenButton, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Love() {

    const router = useRouter();
    const name = router.query.name;
    const userData = require("@/common/data/user.json");
    const newUser = userData.filter((obj) => {return obj.name == name})
    console.log(newUser)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <div className={styles.profile_wrapper}>
                        <div className={styles.logo}><Image onContextMenu={() => event.preventDefault()} width={500} height={500} src={`/image/${newUser[0]?.name}.jpg`}></Image></div>
                        <div className={styles.content}>
                            <div className={styles.info}>
                                <div className={styles.main_info}>
                                    <h3 className={styles.name}>{newUser[0]?.name}</h3>
                                    <span className={styles.nickname}>{newUser[0]?.nickname}</span>
                                </div>
                                <p className={styles.introduction}>{newUser[0]?.introduction}</p>
                            </div>
                            <div className={styles.button_group}>
                                <div className={styles.common_button}>
                                    <button className={styles.commonBtn}><FontAwesomeIcon icon={faBell}/></button>
                                    <button className={styles.commonBtn}><FontAwesomeIcon icon={faHeart}/> </button>
                                    <a href={`tel:${newUser[0]?.tel}`} className={styles.commonBtn}><FontAwesomeIcon icon={faMobileScreenButton}/></a>
                                    <a href={`mailto:${newUser[0]?.email}?subject=당신을 사랑합니다&body=당신은 사랑받기 위해 태어난 사람`} className={styles.commonBtn}><FontAwesomeIcon icon={faPaperPlane}/></a>
                                </div>
                                <Link href={`/life/${newUser[0]?.name}`} className={styles.storyBtn}>일상스토리</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.history}></div>
            </div>
        </div>
    )
}