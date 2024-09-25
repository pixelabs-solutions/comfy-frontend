'use client';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Step2 from './components/step2'; // Ensure this import path is correct
import FormComponent from '/app/signup/components/form.jsx';
import { MdClose } from 'react-icons/md';
import { useAddUserMutation } from '@/store/query/postapis';
import { useRouter } from 'next/navigation';
import SuccessMessage from '@/components/layouts/scucessmessage';
import ErrorBox from '@/components/layouts/errormessage';

// Validation schemas for each step
const validationSchemas = [
  Yup.object().shape({
    role: Yup.string().required('Role is required'),
    lastName: Yup.string().required('Last name is required'),
    middleName: Yup.string().required('Middle name is required'),
    firstName: Yup.string().required('First name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Username is required'),
    gender: Yup.string().required('Gender is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  }),
  Yup.object().shape({
    address: Yup.string().required('Address is required'),
    skypeId: Yup.string().required('Skype ID is required'),
    organization: Yup.string().required('Organization is required'),
    department: Yup.string().required('Department is required'),
    position: Yup.string().required('Position is required'),
    profilePicture:Yup.array().required('Profile Picture is required')
  }),
];

const AddUserForm = ({ SetForm }) => {
  const [AddUser] = useAddUserMutation();
  const [MessagesShows, setMessagesShows] = useState('');
  const [step, setStep] = useState(0);
  const router = useRouter(); // Ensure you have the router instance

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, validationSchemas.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (step === validationSchemas.length - 1) {
      try {
        await AddUser(values).unwrap();
        console.log('User added successfully');
        setMessagesShows('Success');
        router.push('/auth'); // Redirect on success
      } catch (err) {
        setMessagesShows('Error');
        console.error('Failed to add user: ', err);
      }
    } else {
      nextStep(); // Move to the next step
    }
    setSubmitting(false); // Always call this to end the submission state
  };

  return (
<>
<Formik
      initialValues={{
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        approved: 'true',
        status: 'active',
        username: '',
        gender: '',
        password: '',
        confirmPassword: '',
        address: '',
        skypeId: '',
        organization: '',
        department: '',
        position: '',
        profilePicture: ''
      }}
      validationSchema={validationSchemas[step]} // Use validation schema for current step
      onSubmit={handleSubmit} // Pass handleSubmit directly
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <div className="inset-0 fixed flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Form className="relative flex lg:h-[auto] h-[500px] lg:w-[38%] w-[95%] flex-col rounded-2xl bg-white lg:px-10 px-5 lg:my-0 my-10 py-10 overflow-y-auto animate-slide-down">
            <button
              type="button"
              onClick={() => SetForm(false)} // Close the form
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <MdClose size={24} />
            </button>

            <h1 className="text-3xl font-bold text-black text-center">Add User</h1>
            {step === 0 && <FormComponent values={values} setFieldValue={setFieldValue} />} {/* Pass values and setFieldValue */}
            {step === 1 && <Step2 values={values} setFieldValue={setFieldValue} />} {/* Pass values and setFieldValue */}

            <div className="flex justify-between mt-4">
              {step > 0 && (
                <button type="button" onClick={prevStep} className="rounded-md mr-auto py-2 text-lg font-semibold">Back</button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ms-auto mt-8 flex rounded-md bg-[#FBCC1D] px-12 py-[8px] text-lg font-semibold"
              >
                {step === validationSchemas.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
    {MessagesShows === 'Success' && (
        <SuccessMessage Message={'You Are Logged In Successfully'} onClose={() => setMessagesShows(null)} />
      )}
      {MessagesShows === 'Error' && (
        <ErrorBox errorMessage={'Failed to log in. Please try again.'} onClose={() => setMessagesShows(null)} />
      )}
</>
  );
};

export default AddUserForm;
