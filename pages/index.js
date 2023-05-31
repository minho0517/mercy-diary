import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default function Home() {

  const user = require("@/common/data/user.json");

  return (
    <>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Link href="/" className={styles.title}>Love Story in Mercy</Link>
          </header>
          {user?.map((e, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.card_wrapper}>
                <div className={styles.logo}><Image width={500} height={500} src={`/image/${e.name}`}></Image></div>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.main_info}>
                      <h3 className={styles.name}>{e.name}</h3>
                      <span className={styles.nickname}>{e.nickname}</span>
                    </div>
                    <p className={styles.introduction}>{e.introduction}</p>
                  </div>
                  <div className={styles.button_group}>
                    <Link href={`/love/${e.name}`} className={styles.storyBtn}>러브 스토리</Link>
                    <Link href={`/life/${e.name}`} className={styles.storyBtn}>일상 스토리</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
             