import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import sanitizeHtml from "sanitize-html";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../commrent/CommentForm";
import Comments from "../commrent/Comments";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;


  const { post } = data;
  return (
    <Container maxWidth="lg">
      <Grid size={{ xs: 12 }}>
        <Grid
          size={{ xs: 12 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={6}
        >
          <Typography component="h2" variant="h4" fontWeight={700}>
            {post.title}
          </Typography>
          <ArrowBackRounded
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <img
            src={post.coverPicture.url}
            alt={post.slug}
            width="100%"
            style={{ marginTop: "50px", borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 }} mt={7} display="flex" alignItems="center">
        <Avatar
          src={post.author.avatar.url}
          sx={{ width: "80px", height: "80px", marginLeft: 2 }}
        />
        <Box>
          <Link
            to={`/authors/${post.author.slug}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography component="p" variant="h5" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="h6" color="text.secondary">
              {post.author.field}
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }} mt={7}>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html) }}
        ></div>
      </Grid>
      <Grid size={{ xs: 12 }} mt={7}>
        <CommentForm slug={slug} />
      </Grid>
      <Grid size={{ xs: 12 }} mt={7}>
        <Comments slug={slug} />
      </Grid>
    </Container>
  );
}

export default BlogPage;
