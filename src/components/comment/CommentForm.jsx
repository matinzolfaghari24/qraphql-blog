import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [createComment, { loading, data, error }] = useMutation(
    CREATE_COMMENT,
    {
      variables: { name, email, text, slug },
    }
  );
  const sendHandler = () => {
    if (name && email && text) {
      createComment();
      toast.success("کامنت با موفقیت ارسال شد و منتظر تایید می باشد", {
        position: "top-center",
      });
      
    } else {
      toast.warn("لطفا تمام فیلد ها را پر کنید", { position: "top-center" });
    }
  };



  return (
    <Grid
      size={{ xs: 12 }}
      mt={6}
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 2 }}
    >
      <Grid size={{ xs: 12 }} m={3}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} m={3}>
        <TextField
          variant="outlined"
          label="نام کاربری"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12 }} m={3}>
        <TextField
          variant="outlined"
          label="ایمیل"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12 }} m={3}>
        <TextField
          variant="outlined"
          label="متن کامنت"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={3}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال...
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
