import { useContext, useEffect, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import translations from "../../locals/translations";
import { LanguageContext } from "../../context/languageContext";
import { useColor } from "../../context/colorContext";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isActiveLink, setActiveLink] = useState('home')

  const { selectedColor, setSelectedColor} = useColor();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const colors = [
    {
      darkColor: '#F5C83D',
      lightColor: '#FAE39E'
    },
    {
      darkColor: '#F5493D',
      lightColor: '#FAA49E'
    },
    {
      darkColor: '#F07642',
      lightColor: '#F7BBA1'
    },
    {
      darkColor: '#69CC66',
      lightColor: '#B4E6B3'
    }
  ];

  const { language, toggleLanguage } = useContext(LanguageContext);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme; // <html> element par class apply karega
    localStorage.setItem("theme", theme); // Theme ko localStorage mein save karega
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${styles.hdwp} ${isVisible ? styles.bxs : ''} `}>
      <nav className={styles.navhd}>
        <div className={styles.hdlgwp}>
          <a href="#">{translations[language].delivery}</a>
        </div>

        <div
          className={
            isOpen
              ? `${styles.hdlk} ${styles.mbo}`
              : `${styles.hdlk} ${styles.mbc}`
          }
          onClick={toggleOpen}
        >
          <ul>
            <li>
              <a href="#home" 
                className={isActiveLink === 'home' ? styles.active : ''}
                onClick={() => setActiveLink('home')}>
                {translations[language].home}
              </a>
            </li>
            <li>
              <a href="#about" 
                className={isActiveLink === 'about' ? styles.active : ''}
                onClick={() => setActiveLink('about')}>
                {translations[language].about}
              </a>
            </li>
            <li>
              <a href="#services" 
                className={isActiveLink === 'services' ? styles.active : ''}
                onClick={() => setActiveLink('services')}>
                {translations[language].services}
                </a>
            </li>
            <li>
              <a href="#contact" 
                className={isActiveLink === 'contact' ? styles.active : ''}
                onClick={() => setActiveLink('contact')}>
                {translations[language].contact}
              </a>
            </li>
            <li>
              <i
              style={{color: selectedColor.darkColor }}
                className={
                  theme === "light" ? "fa fa-toggle-on" : "fa fa-toggle-off"
                }
                onClick={toggleTheme}
              ></i>
            </li>
            <li className={styles.hct}>
              {colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color.darkColor }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                );
              })}
            </li>
            <li>
              <div className={styles.hrlg} onClick={toggleLanguage}>
                {language === "en" ? (
                  <>
                    <img
                      src="./assets/imgs/america-flag.png"
                      alt="english flag"
                    />
                    <span className={styles.helgt}>English</span>
                  </>
                ) : (
                  <>
                    <img
                      src="./assets/imgs/pakistan-flag.png"
                      alt="urdu flag"
                    />
                    <span className={styles.helgt}>Urdu</span>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.hbw}>
          {language === "en" ? (
            <Button texts={["Order now!"]} />
          ) : (
            <Button texts={["ابھی آرڈر کریں"]} />
          )}
        </div>

        <div className={styles.hmb} onClick={toggleOpen}>
          <i className="fa fa-th-large"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
