import * as Mui from "@mui/material";
import Thinking from "src/assets/img/thinking.svg";

export const Content = () => {
  return (
    <Mui.Box>
      <Mui.Grid container xs={6} sm={12}>
        <Mui.Grid item>
          <Mui.Typography variant="h4">
            Hi, I am Sathiyanarayanan
          </Mui.Typography>
          <Mui.Typography variant="h5">
            A Software Engineer based in Kumbakonam, Tamil Nadu.
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item>
          <Mui.CardMedia image={Thinking} sx={{ width: 510, height: 218 }} />
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Box>
  );
};
