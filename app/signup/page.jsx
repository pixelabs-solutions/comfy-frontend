// AddUserForm.js
import React, { useState } from 'react';
import { Formik } from 'formik';
import FormComponent from './components/form';
import Step2 from './components/Step2';

const AddUserForm = () => {
    const [step, setStep] = useState(0);
    const [formValues, setFormValues] = useState({
        userType: '',
        lastName: '',
        middleName: '',
        firstName: '',
        email: '',
        username: '',
        gender: '',
        password: '',
        confirmPassword: '',
        location: '',
        skypeId: '',
        organization: '',
        department: '',
        position: '',
    });

    const handleStepChange = (newStep) => {
        setStep(newStep);
    };

    const handleSubmit = (values) => {
        if (step === 1) {
            // Handle final form submission here
            console.log('Form submitted with values:', values);
        } else {
            // For step 0, move to next step
            setStep(1);
        }
    };

    return (
        <div className="flex w-[40%] flex-col items-center rounded-2xl bg-white px-20 py-10 translate-x-[75%] translate-y-[18%]">
            <h1 className="text-3xl font-bold text-black">Add User</h1>
            <Formik
                initialValues={formValues}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <>
                        {step === 0 && (
                            <FormComponent
                                values={values}
                                setFieldValue={setFieldValue}
                                onNext={() => handleStepChange(1)}
                            />
                        )}
                        {step === 1 && (
                            <Step2
                                values={values}
                                setFieldValue={setFieldValue}
                                onBack={() => handleStepChange(0)}
                            />
                        )}
                    </>
                )}
            </Formik>
        </div>
    );
};

export default AddUserForm;
