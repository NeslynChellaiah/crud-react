import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function UserCard({ name, email, imgSrc, editUser }) {
  return (
    <Card
      sx={{ minWidth: "100%", border: "1px solid" }}
      onClick={() => editUser({ name, email, imgSrc, editUser })}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt={name}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            backgroundColor: "lightgrey",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Name: {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Email: {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    // <div>
    //   <img src="imgSrc" />
    //   <div>
    //     <span>Name: {name}</span>
    //     <span>Email: {email}</span>
    //   </div>
    // </div>
  );
}
