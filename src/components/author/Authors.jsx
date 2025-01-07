import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Grid from "@mui/material/Grid2";
import { Avatar, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader/>;
  if (error) return <p>Error...</p>;

  const { authors } = data;
  return (
    <div>
      <Grid sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
        {authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid padding={2} size={{ xs: 12 }}>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                to={`/authors/${author.slug}`}
              >
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== authors.length - 1 && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default Authors;
