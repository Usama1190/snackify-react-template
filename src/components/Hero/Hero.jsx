import { useEffect } from "react";
import { useColor } from "../../context/colorContext";
import Button from "../common/Button/Button";
import styles from "./Hero.module.css";
import ImageCom from "../Image/ImageCom";

const Hero = ({ data }) => {
  const { selectedColor } = useColor();
  const {
    title,
    description,
    btnText,
    btnLink,
    imgUrl,
    imgAlt,
    btnIcons,
    isrotate,
    imgLaout,
    id,
    pd,
    pl,
  } = data;

  console.log(id);

  return (
    <div id={id} className={styles.hrwp}>
      <div
        className={
          isrotate ? `${styles.her} ${styles.hrciwp}` : `${styles.hrciwp}`
        }
      >
        <div className={styles.hrcwp}>
          <h1 className={styles.hrt}>{title}</h1>
          <p className={styles.hrdc}>{description}</p>
          <div className={styles.hrbw}>
            {btnText ? (
              <Button texts={btnText} links={btnLink} icons={btnIcons} />
            ) : null}
          </div>
        </div>
        <div className={styles.hriwp}>
          <ImageCom svgUrl={imgUrl} pathDark={pd} pathLight={pl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
