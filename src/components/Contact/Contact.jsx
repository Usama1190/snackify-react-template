import styles from './Contact.module.css'
import Button from "../common/Button/Button"
import { contactData, contactInfo } from '../../utils/constant/contactData'
import { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const data = contactData[language];
  const info = contactInfo[language]

  const { title, description, btnText } = data;
  const { tel, email, location } = info;
  return (
    <section id='contact' className={styles.cnwp}>
      <div className={styles.cncnwp}>
        <div className={styles.cnhdes}>
          <h2 className={styles.cnt}>{ title }</h2>
          <p className={styles.cndes}>{ description }</p>
        </div>
        <div>
          <ul className={styles.consw}>
            <li>{ tel }: <a href="#">123 - 456 - 789</a></li>
            <li>{ email }: <a href="#">delivery@email.com</a></li>
            <li>{ location }: <a href="#">Planet Earth</a></li>
          </ul>
        </div>
        <div className={styles.cbw}> 
          <Button texts={btnText} />
        </div>
      </div>
    </section>
  )
}

export default Contact
