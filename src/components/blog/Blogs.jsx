import { useQuery } from "@apollo/client";
import React from "react";
import Grid from "@mui/material/Grid2";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader/>;

  if (error) return <h4>Error...</h4>;

  return (
    <div>
      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id} >
            <CardEL {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blogs;
