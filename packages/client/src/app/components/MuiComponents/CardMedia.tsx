import React from "react";
import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as MuiIcons from "@mui/icons-material";

export const CustomCardMedia = (props: Mui.CardMediaProps) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  return (
    <Mui.Box>
      {!isImageLoaded && <Mui.LinearProgress />}
      <Mui.CardMedia
        component="img"
        loading="lazy"
        onLoad={() => setIsImageLoaded(true)}
        image={props.image}
        className={props.className || undefined}
      />
    </Mui.Box>
  );
};
