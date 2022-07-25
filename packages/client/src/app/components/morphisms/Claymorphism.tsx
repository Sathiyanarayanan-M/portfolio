import * as Mui from "@mui/material";
export const Claymorphism = (props: Mui.BoxProps) => {
  const { children, sx = {}, ...rest } = props;
  return (
    <Mui.Box
      sx={{
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Mui.Box>
  );
};
