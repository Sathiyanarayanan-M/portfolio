import * as Mui from "@mui/material";
export const CardSkeleton = () => {
  return (
    <Mui.Stack direction="row" spacing={1}>
      <Mui.Box height="100%" width="100%">
        <Mui.Typography variant="caption">
          <Mui.Skeleton
            variant="rectangular"
            sx={{ bgcolor: "primary.light", width: "50%" }}
          />
        </Mui.Typography>
        <Mui.Typography variant="h6">
          <Mui.Skeleton
            variant="rectangular"
            sx={{ mt: 1, bgcolor: "primary.light" }}
          />
        </Mui.Typography>
        <Mui.Skeleton
          variant="rectangular"
          sx={{ mt: 1, height: 145, bgcolor: "primary.light" }}
        />
      </Mui.Box>
      <Mui.Box height="100%" width="100%">
        <Mui.Skeleton
          variant="rectangular"
          sx={{ height: 200, bgcolor: "primary.light" }}
        />
      </Mui.Box>
    </Mui.Stack>
  );
};
{
  /* <Mui.Stack direction="row">
  <Mui.Box>
    <Mui.Skeleton
      variant="rectangular"
      sx={{ mt: 1, bgcolor: "primary.light" }}
    />
    <Mui.Skeleton
      variant="rectangular"
      sx={{ mt: 1, width: "60%", bgcolor: "primary.light" }}
    />
  </Mui.Box>

  <Mui.Skeleton
    variant="rectangular"
    sx={{ height: 200, bgcolor: "primary.light" }}
  />
</Mui.Stack> */
}