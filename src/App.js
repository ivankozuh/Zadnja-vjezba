import React, { useState } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import FinalStep from './components/FinalStep';

import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    ime:"",
    prezime:"",
    email:"",
    drzavljanstvo:"",
    grad:"",
    godine:""
  });

  return (
    <div className="App">
    {step === 0 && <FirstStep step={step} setStep={setStep} formData={formData} setFormData={setFormData} />}
    {step === 1 && <SecondStep step={step} setStep={setStep} formData={formData} setFormData={setFormData} />}
    {step === 2 && <ThirdStep step={step} setStep={setStep} formData={formData} />}
    {step === 3 && <FinalStep />}

    </div>
  );
}

export default App;
