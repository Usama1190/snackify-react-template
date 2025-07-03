import { useColor } from "../../../context/colorContext";
import styles from "./Button.module.css";

const Button = ({ texts, icons }) => {
  const {selectedColor} = useColor();

  return (
    <div>
      {texts?.map((item, index) => {
        return (
          <a href="#" key={index}>
            <button style={{backgroundColor: selectedColor.darkColor}}>
              <span className={styles.hbs}>
                {icons && <i key={index} className={`${icons[index]}`}></i>}
                {item}
              </span>
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default Button;
