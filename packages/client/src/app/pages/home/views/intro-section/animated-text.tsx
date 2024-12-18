import React, { MutableRefObject } from "react";
import * as Mui from "@mui/material";
import styles from "src/app/pages/home/views/styles.module.scss";

export const AnimatedText = () => {
  const text1Ref =
    React.useRef() as unknown as MutableRefObject<HTMLDivElement>;
  const text2Ref =
    React.useRef() as unknown as MutableRefObject<HTMLDivElement>;
  const texts = ["Web Developer", "Backend Developer", "Mobile App Developer"];
  const morphTime = 1.5;
  const cooldownTime = 0.5;
  let textIndex = texts.length - 1;
  let time = new Date().getTime();
  let morph = 0;
  let cooldown = cooldownTime;

  function doCooldown() {
    morph = 0;
    if (text2Ref.current) {
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
    }
    if (text1Ref.current) {
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    }
  }

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
    setMorph(fraction);
  }

  function setMorph(fraction: number) {
    if (text1Ref.current && text2Ref.current) {
      text2Ref.current.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    let newTime = new Date().getTime();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;
    cooldown -= dt;
    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }
      doMorph();
    } else {
      doCooldown();
    }
  }

  React.useEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
      animate();
    }
  }, [text1Ref, text2Ref]);
  return (
    <Mui.Box
      className={styles.box__container}
      sx={{
        color: "common.black",
        fontWeight: 600,
        fontFamily: "Texturina, serif",
        fontSize: { xs: "2em", sm: "2.5em", md: "3.5em" },
      }}
    >
      <Mui.Box className={styles.text__container}>
        <span ref={text1Ref} className={styles.text1}></span>
        <span ref={text2Ref} className={styles.text1}></span>
      </Mui.Box>
      <svg>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </Mui.Box>
  );
};
