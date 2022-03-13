  import React from 'react';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import Box from '@mui/material/Box';
  import Stepper from '@mui/material/Stepper';
  import Step from '@mui/material/Step';
  import StepLabel from '@mui/material/StepLabel'; 

  const koraci = [
    'Prvi korak',
    'Drugi korak',
    'Treći korak',
  ];

  function FirstStep({ step, setStep, formData, setFormData }) {
    function Dalje() {
      setStep(() => step + 1)
    }
    return (
      <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={0} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      
      <div>
          <TextField id="standard-basic" label="Ime" variant="standard" onChange={(event) => setFormData({...formData, ime: event.target.value})} />
      </div>
      <div>
          <TextField id="standard-basic" label="Prezime" variant="standard" onChange={(event) => setFormData({...formData, prezime: event.target.value})} />
      </div>
      <div>
          <TextField id="standard-basic" label="E-mail" variant="standard" onChange={(event) => setFormData({...formData, email: event.target.value})} />
      </div>
      <div  className="gubmic">
      <Button variant="contained" onClick={Dalje}>Dalje</Button>
      </div>
      </>
    )
  }

  export default FirstStep
