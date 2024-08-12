import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function User({ avatar, url, username }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" height="140" image={avatar} alt={username} />
        <CardContent>
          <Typography variant="h6" gutterBottom>{username}</Typography>
          <Button variant="contained" color="primary" href={url} target="_blank">
            View Profile
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
