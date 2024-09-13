import React, { useState, useRef, useEffect } from 'react';
import { Formik } from 'formik';
import { MdClose } from 'react-icons/md';
import FormComponent from './components/form';
import Step2 from './components/Step2';
import { useAddUserMutation } from '@/store/query/postapis';

const AddUserForm = ({ onClose = () => {} }) => { // Default to no-op function
  const [step, setStep] = useState(0);
  const [AddUser] = useAddUserMutation();
  const [formValues, setFormValues] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    approved: 'no',
    status: "active",
    username: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    skypeId: '',
    organization: '',
    department: '',
    position: '',
    profilePicture: '', // Ensure this is a string for the URL
  });

  const formRef = useRef(null);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (step === 1) {
      try {
        await AddUser(values).unwrap(); // Send the data
        console.log('User added successfully');
      } catch (err) {
        console.error('Failed to add user: ', err);
      }
      setSubmitting(false);
    } else {
      setFormValues(values); // Update formValues with the current form values
      handleStepChange(1); // Move to the next step
    }
  };

  // Close the form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose(); // Call the onClose handler when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="inset-0 fixed flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={formRef}
        className="relative flex lg:h-[auto] h-[500px]  lg:w-[38%] w-[95%] flex-col rounded-2xl bg-white lg:px-10 px-5 lg:my-0 my-10 py-10 overflow-y-auto animate-slide-down"
      >
        {/* Cross icon for manual closing */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <MdClose size={24} />
        </button>

        <h1 className="text-3xl font-bold text-black text-center ">Add User</h1>
        <Formik
          initialValues={formValues}
          onSubmit={handleSubmit}
          enableReinitialize={true} // Ensure form values are updated
        >
          {({ values, setFieldValue, isValid, submitForm }) => (
            <>
              {step === 0 && (
                <FormComponent
                  values={values}
                  setFieldValue={setFieldValue}
                  onNext={() => {
                    if (isValid) {
                      submitForm();
                    }
                  }}
                />
              )}
              {step === 1 && (
                <Step2
                  values={values}
                  setFieldValue={setFieldValue}
                  onBack={() => handleStepChange(0)}
                  onSubmit={() => submitForm()}
                />
              )}
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUserForm;
