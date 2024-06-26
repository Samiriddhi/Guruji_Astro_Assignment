import React from 'react';
import { TextField, Grid } from '@mui/material';

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <>
    <p style={{color: "gray"}}>Fill Your Personal Informations Here</p>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          required
        />
      </Grid>
    </Grid>
    </>
  );
};

export default PersonalInfo;
