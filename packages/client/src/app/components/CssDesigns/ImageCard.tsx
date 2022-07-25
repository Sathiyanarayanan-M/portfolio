import styles from "src/app/components/styles.module.scss";

export const ImageCard = (props: ImageCardPropType) => {
  return (
    <div className={styles["image__card__container"]}>
      <div className={styles["card"]}>
        <div className={styles["card__thumb"]}>
          <img
            src={props.image}
            alt={props.title}
            className={styles["card__image"]}
          />
          <figcaption className={styles["card__caption"]}>
            <h2 className={styles["card__title"]}>{props.title}</h2>
            <p className={styles["card__snippet"]}>{props.description}</p>
            <button
              onClick={props.onReadMoreClick}
              className={styles["card__button"]}
            >
              <div className={styles.translate}></div>
              <a href={props.actionUrl} target="_blank">
                Details
              </a>
            </button>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export interface ImageCardPropType {
  title: string;
  description: string;
  image: string;
  actionUrl: string;
  onReadMoreClick: () => void;
}
