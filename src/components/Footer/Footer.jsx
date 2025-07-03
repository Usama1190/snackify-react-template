import { useContext } from "react";
import footerData from "../../utils/constant/footerData";
import styles from "./Footer.module.css";
import { LanguageContext } from "../../context/languageContext";
import { useColor } from "../../context/colorContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const data = footerData[language];

  const {selectedColor} = useColor();

  return (
    <div className={styles.ftwp} style={{backgroundColor: selectedColor.lightColor}}>
      <div className={styles.ftiwp}>
        {data.map((item, index) => {
          const { title, description, links, icons } = item;
          return (
            <div key={index} className={styles.ftcnwp}>
              <h2>{ title }</h2>
              {
                description?.map((item, index) => {
                  return (
                    <>
                    <p key={index}>{ item }</p>
                    </>
                  )
                })
              }
              {
                links && <ul>
                {
                  links?.map((item, index) => {
                    return (
                      <li key={index} className={styles.ftlan}>
                        <a href="#">{ item }</a>
                      </li>
                    )
                  })
                }
              </ul>
              }
              {
                icons?.map((item, index) => {
                  return (
                    <span key={index} className={styles.ftics}>
                      <a href="#"><i className={`${item}`}></i></a>
                    </span>
                  )
                })
              }
            </div>
          );
        })}
      </div>

      <div className={styles.dn}>
        <p>Developed by <a href="https://www.linkedin.com/in/usama-israr-khan-3b68312ab/" target="_blanks">Usama Israr Khan</a></p>
      </div>
    </div>
  );
};

export default Footer;
