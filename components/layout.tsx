import React, {useState, useCallback} from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Layout ({children}:{children:React.ReactNode}) {
  const [delta, setDelta] = useState('0');
  const handleMouseMove = useCallback((e) => {
    let offset = e.currentTarget.offsetLeft;
    let calc = e.clientX -  offset;
    let final = calc + 'px';
    console.log(final);
    setDelta(final);
  }, [])
  return (
  <div className={styles.container}>
    <Link href="/">
        <div className={styles.imageNameHolder}>



          <div className={styles.imageNameHolder}>
            <div className={styles.bannerWrapper} id='banner-wrapper' onMouseMove={(e) => handleMouseMove(e)}>
              <div className={styles.bannerDesign}>
                <div className={styles.bannerContent}>
                  <img src='/images/andrew_200.jpeg' height="50"
              width="200"></img>
                </div>
              </div>
              <div className={styles.bannerDev} style={{width: `${delta}`}}>
                <div className={styles.bannerContent}>
                  <img src='/images/andrew_old2.jpg' height="50"
              ></img>
                </div>
              </div>
            </div>
          </div>
          <h1>Andrew Wardwell</h1>
          <div className={styles.links}> 
            <Link href="https://www.linkedin.com/in/andrewgwardwell/">
            <a>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
          </Link>
          <Link href="https://github.com/andrewgwardwell">
            <a>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
          </div>
        </div>
    </Link>
    {children}
  </div>
  )
}
