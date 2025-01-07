import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CardEL({ title, slug, coverPicture, author }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              mr={2}
              fontWeight={500}
              color="text.secondary"
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height={194}
        image={coverPicture.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          fontWeight={600}
          color="text.primary"
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
