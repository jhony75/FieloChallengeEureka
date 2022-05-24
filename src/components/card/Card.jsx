import styles from './card.module.scss';

function Card({ content }) {
  return (
    <div className={styles.container}>
      <span className={styles.description}>{content}</span>
    </div>
  );
}

export default Card;
