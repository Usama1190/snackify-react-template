import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import heroData from "../../utils/constant/heroData.js";
import Header from "../../components/Header/Header.jsx";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/languageContext.jsx";
import styles from "./Home.module.css";
import { useColor } from "../../context/colorContext.jsx";

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const data = heroData[language];

  const {selectedColor} = useColor();

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

  return (
    <div id="home">
      <Header />
      <div
      style={{backgroundColor: selectedColor?.darkColor}}
        className={`${styles.gtb} ${isVisible ? styles.show : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <a href="#">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
      {data.map((item, index) => {
        if (index === 2) {
          return (
            <>
              <Hero key={index} data={item} />
              <Services />
            </>
          );
        } else {
          return <Hero key={index} data={item} />;
        }
      })}
      <Contact />
    </div>
  );
};

export default HomePage;
