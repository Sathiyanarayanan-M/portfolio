import React, { MutableRefObject } from "react";
import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import styles from "src/app/pages/home/views/styles.module.scss";

export const Main = () => {
  return (
    <Mui.Box className={styles.home__section}>
      {/* <Mui.Box sx={{ m: "20px auto", textAlign: "center" }}> */}
      <Mui.Typography variant="h4" className={styles.name__text}>
        Sathiyanarayanan
      </Mui.Typography>
      {/* <Mui.Typography>Sathiyanarayanan</Mui.Typography> */}
      {/* <Pages.Home.Views.HomeSection.AnimatedText /> */}
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
          <Pages.Home.Views.HomeSection.AnimatedText />
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
    </Mui.Box>
  );
};
