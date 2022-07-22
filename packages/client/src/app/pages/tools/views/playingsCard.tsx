import React from "react";
import * as Mui from "@mui/material";

export default function MediaCard() {
  return (
    <Mui.Card sx={{ maxWidth: 345 }}>
      <Mui.CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <Mui.CardContent>
        <Mui.Typography gutterBottom variant="h5" component="div">
          Lizard
        </Mui.Typography>
        <Mui.Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Mui.Typography>
      </Mui.CardContent>
      <Mui.CardActions>
        <Mui.Button size="small">Share</Mui.Button>
        <Mui.Button size="small">Learn More</Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
  );
}
