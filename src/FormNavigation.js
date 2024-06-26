import React from "react";
import { Button, Grid } from "@mui/material";

const FormNavigation = ({ step, handleBack, handleNext, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={step === 0}>
          Back
        </Button>
      </Grid>
      {step < 2 ? (
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      ) : (
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default FormNavigation;
