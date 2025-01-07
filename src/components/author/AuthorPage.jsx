import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;

  const {
    author: { name, field, description, avatar, post },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid
        mt={10}
        size={{ xs: 12 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
        <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
          {name}
        </Typography>
        <Typography component="p" variant="h5" color="text.secondary" mt={2}>
          {field}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} mt={5}>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
        ></div>
      </Grid>

      <Grid size={{ xs: 12 }} mt={6}>
        <Typography component="h3" variant="h5" fontWeight={700}>
          مقالات {name}
        </Typography>

        <Grid container spacing={2} mt={3}>
          {post.map((post) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <CardEL {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
