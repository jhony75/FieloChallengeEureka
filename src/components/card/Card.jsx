import styles from './card.module.scss';

function Card({ children }) {
  return (
    <div className={styles.container}>
      <span className={styles.description}>{children}</span>
    </div>
  );
}

export { Card };
