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
        <Mui.Typography variant="h5">Funzone Page</Mui.Typography>
      </Mui.Stack>
    </Mui.Container>
  );
};
