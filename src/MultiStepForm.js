import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import FormNavigation from './FormNavigation';
import { Container, Paper, Tabs, Tab, Typography } from '@mui/material';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setStep(0);
    }
  };

  const validateStep = () => {
    // Basic validation for each step
    switch (step) {
      case 0:
        return formData.name && formData.email && formData.phone;
      case 1:
        return formData.address1 && formData.city && formData.state && formData.zip;
      default:
        return true;
    }
  };

  return (
    <Container>
      <Paper>
        <Tabs value={step} onChange={(e, newValue) => setStep(newValue)}>
          <Tab label="Personal Info" />
          <Tab label="Address Info" />
          <Tab label="Confirmation" />
        </Tabs>
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {step === 0 && <PersonalInfo formData={formData} handleChange={handleChange} />}
          {step === 1 && <AddressInfo formData={formData} handleChange={handleChange} />}
          {step === 2 && <Confirmation formData={formData} />}
        </Typography>
        <FormNavigation
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Container>
  );
};

export default MultiStepForm;
