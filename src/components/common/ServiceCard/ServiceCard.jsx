import CardImage from '../../CardImage/cardImage';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ data }) => {
  const { title, imgUrl, description, imgAlt, btnText, btnLink, id, phd, phl } = data;
  return (
    <div className={styles.scwp}>
      <h3 className={styles.sct}>{title}</h3>
      {/* <img className={styles.scig} src={imgUrl} alt={imgAlt} /> */}
      <div className={styles.cw}>
        <CardImage phd={phd} phl={phl} id={id} />
      </div>
      <p className={styles.scdes}>{description}</p>
      <a href={btnLink}><b>{btnText}</b></a>
    </div>
  )
}

export default ServiceCard
