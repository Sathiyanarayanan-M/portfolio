import React, { MutableRefObject } from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  return (
    <Mui.Box className={styles.intro__section}>
      {/* <Mui.Box sx={{ m: "20px auto", textAlign: "center" }}> */}
      <Mui.Typography variant="h4" className={styles.name__text}>
        Sathiyanarayanan
      </Mui.Typography>
      {/* <Mui.Typography>Sathiyanarayanan</Mui.Typography> */}
      {/* <Pages.Home.Views.IntroSection.AnimatedText /> */}
      <Mui.Typography
        variant="h4"
        sx={{
          fontSize: "5rem",
          lineHeight: 1.1,
        }}
      >
        Software Development Engineer <br />
        Based in TamilNadu
      </Mui.Typography>
      {/* </Mui.Box> */}
      {/* <Mui.Box>
          <Mui.Typography
            color="primary.main"
            sx={{
              fontFamily: "'Texturina', serif",
              fontSize: { xs: "2em", sm: "2.5em", md: "3.5em" },
              fontWeight: 800,
            }}
          >
            Hi, I'm Sathiyanarayanan
          </Mui.Typography>
          <Pages.Home.Views.IntroSection.AnimatedText />
          <Mui.Typography
            variant="h5"
            color="primary.main"
            fontFamily="'Texturina', serif"
          >
            Based in Kumbakonam, Tamil Nadu.
          </Mui.Typography>
        </Mui.Box> */}
      {/* <Mui.Box>
          <Mui.CardMedia
            component="img"
            src={Hooks.useCDNBucket("images/programming.svg")}
            sx={{
              width: { md: 523, xs: "80vw" },
              height: { md: 330, xs: 300 },
              objectFit: "contain",
            }}
          />
        </Mui.Box> */}

      <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.short__intro}
      >
        <Mui.Stack
          spacing={10}
          sx={{ width: "20vw" }}
          className={styles.left__stack}
        >
          <Mui.Box>
            <Mui.Typography className={styles.title}>BIOGRAPHY</Mui.Typography>
            <Mui.Typography className={styles.content}>
              Passionate developer with <br />
              hands-on experience on developing web application.
            </Mui.Typography>
          </Mui.Box>
          <Mui.Box>
            <Mui.Typography className={styles.title}>CONTACT</Mui.Typography>
            <Mui.Typography className={styles.content}>
              Kumbakonam, TamilNadu.
            </Mui.Typography>
            <Mui.Link
              className={styles.content}
              href="mailto:msathiya1622@gmail.com"
            >
              msathiya1622@gmail.com
            </Mui.Link>
            <Mui.Link className={styles.content} href="tel:+919842250566">
              +91 9842250566
            </Mui.Link>
          </Mui.Box>
        </Mui.Stack>
        <Mui.Box>
          <Mui.CardMedia
            component="img"
            src={Hooks.useCDNBucket("images/programming.svg")}
            sx={{
              width: { md: 523, xs: "80vw" },
              height: { md: 330, xs: 300 },
              objectFit: "contain",
            }}
            className={styles.media}
          />
        </Mui.Box>
        <Mui.Stack
          spacing={10}
          sx={{ width: "20vw" }}
          className={styles.right__stack}
        >
          <Mui.Box>
            <Mui.Typography className={styles.title}>
              PROJECT WORKED
            </Mui.Typography>
            <Mui.Typography className={`${styles.content} ${styles.numbers}`}>
              20
            </Mui.Typography>
          </Mui.Box>
          <Mui.Box>
            <Mui.Typography className={styles.title}>
              YEARS OF EXPERIENCE
            </Mui.Typography>
            <Mui.Typography className={`${styles.content} ${styles.numbers}`}>
              2
            </Mui.Typography>
          </Mui.Box>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Box>
  );
};
