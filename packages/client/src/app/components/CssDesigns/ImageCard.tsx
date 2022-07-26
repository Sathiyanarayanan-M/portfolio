import React from "react";
import * as Components from "src/app/components";
import styles from "src/app/components/CssDesigns/cssdesign.module.scss";

export const ImageCard = (props: ImageCardPropType) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  console.log(isImageLoaded);

  return (
    <div className={styles["image__card__container"]}>
      <div className={styles["card"]}>
        <div className={styles["card__thumb"]}>
          {!isImageLoaded && (
            <div className={styles.image__loader}>
              <Components.CssDesigns.CSSLoader />
            </div>
          )}

          <img
            src={props.image}
            alt={props.title}
            className={styles["card__image"]}
            onLoad={() => setIsImageLoaded(true)}
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
