import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return;
  console.log(data);

  return (
    <Grid
      container
      size={{ xs: 12 }}
      mt={8}
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 2 }}
    >
      <Grid size={{ xs: 12 }} m={3}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          کامنت ها
        </Typography>
      </Grid>

      {data.comments.map((comment) => (
        <Grid
          size={{ xs: 12 }}
          p={3}
          key={comment.id}
          sx={{ border: "1px silver solid", borderRadius: 3, m: 3, mb:1 }}
        >
          <Box component="div" display="flex" alignItems="center" mb={2}>
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="span" variant="p" fontWeight={700} mr={1}>
              {comment.name}
            </Typography>
          </Box>
          <Typography component="p" variant="p">
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Comments;
