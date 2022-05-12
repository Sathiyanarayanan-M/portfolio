import * as Mui from "@mui/material";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
  return (
    <Mui.Container
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Mui.Box>
          <Mui.Typography variant="h4">
            Hi, I am Sathiyanarayanan
          </Mui.Typography>
          <Mui.Typography variant="h5">
            A Software Engineer based in Kumbakonam, Tamil Nadu.
          </Mui.Typography>
        </Mui.Box>
        <Mui.Box>
          <Mui.CardMedia
            component="img"
            src={Thinking}
            sx={{
              width: { md: 510, xs: 310 },
              height: { md: 218, xs: 180 },
              objectFit: "contain",
            }}
          />
        </Mui.Box>
      </Mui.Stack>
    </Mui.Container>
  );
};
