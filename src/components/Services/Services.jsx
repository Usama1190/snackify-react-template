import { useContext } from "react";
import serviceCardData from "../../utils/constant/serviceCardData.js";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import styles from "./Service.module.css";
import { LanguageContext } from "../../context/languageContext.jsx";

const Services = () => {
  const { language } = useContext(LanguageContext);

  const data = serviceCardData[language];
  return (
    <div id="services" className={styles.swp}>
      {language === "en" ? (
        <h2 className={styles.swph}>Some Services We Offer</h2>
      ) : (
        <h2 className={styles.swph}>کچھ خدمات جو ہم پیش کرتے ہیں۔</h2>
      )}

      <div className={styles.scwp}>
        {data.map((item, index) => {
          return <ServiceCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
