import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input'; 

import ButtonCustom from './ButtonCustom';

function PostForm() {

  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <div>
      <h1>Add Post</h1>

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Form</legend>

          <label>
            <Grid container>
              <Grid item xs={2}>
                <Typography>Title</Typography>
              </Grid>
              <Grid item xs={10}>
                <InputIcon color="primary" fontSize="small" />
              </Grid>
            </Grid>
          </label>

          <p>
            <input type="text" name="title" value={formData.title || ''} onChange={onChange} />
          </p>

          <label>
            <Grid container>
              <Grid item xs={2}>
                <Typography>Body</Typography>
              </Grid>
              <Grid item xs={10}>
                <InputIcon color="primary" fontSize="small" />
              </Grid>
            </Grid>
          </label>

          <p>
            <input type="text" name="body" value={formData.body || ''} onChange={onChange} />
          </p>

          <p>
            <ButtonCustom 
              type="submit" 
              variant="contained" 
              value="SUBMIT" 
            />
          </p>

        </fieldset>
      </form>
    </div>
  );
}

export default PostForm;