import styles from "src/app/components/CssDesigns/cssdesign.module.scss";

export const CSSLoader = () => {
  return (
    <div className={styles.css__loader__container}>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
    </div>
  );
};
