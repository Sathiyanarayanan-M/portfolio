import * as Mui from "@mui/material";

export const SplashScreen = () => {
  return (
    <Mui.Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: "100vh",
        width: "100vw",
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    >
      <Mui.CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Mui.Box>
  );
};
