import React from 'react';
import { TextField, Grid } from '@mui/material';

const AddressInfo = ({ formData, handleChange }) => {
  return (
    <>
      <p style={{color: "gray"}}>Fill Your Address Here</p>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Zip Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          type="number"
          required
        />
      </Grid>
    </Grid>
    </>
  );
};

export default AddressInfo;
