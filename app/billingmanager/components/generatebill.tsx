"use client";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HiOutlineX } from "react-icons/hi";
import { useGenBillMutation } from "@/store/query/postapis";
import { useBillingManagerDropdownQuery } from "@/store/query/getapis";

// Success message component
const SuccessMessage = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div className="bg-green-100 border border-green-400 relative text-green-700 px-4 py-3 rounded mb-4" role="alert">
    <span className="block sm:inline">{message}</span>
    <button onClick={onClose} className="absolute top-1 right-1 text-green-700 hover:text-green-900">
      <HiOutlineX />
    </button>
  </div>
);

// Error message component
const ErrorBox = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div className="bg-red-100 border relative border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative" role="alert">
    <span className="block sm:inline">{message}</span>
    <button onClick={onClose} className="absolute top-1 right-1 text-red-700 hover:text-red-900">
      <HiOutlineX />
    </button>
  </div>
);

const PopupForm = ({ isOpen, onClose, setUserType,  Roles }: any) => {
  const validationSchema = Yup.object({
    user: Yup.string().required("User is required"),
    role: Yup.string().required("Role is required"), // Add role validation
  });

  const [GenBill, { isLoading }] = useGenBillMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { data: apidata } = useBillingManagerDropdownQuery({ Role: Roles }); // Fetch user data

  const closeMessages = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm transition-opacity duration-300">
          <Formik
            initialValues={{
              user: "",
              role: "", // Initialize role field
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const payload = {
                user: { id: values.user },
                role: values.role,
              };
              try {
                const response = await GenBill(payload).unwrap(); // Send payload
                console.log("Generated Bill:", response);
                setIsSuccess(true);
                setIsError(false);
                resetForm();
                window.location.reload(); 
              } catch (error) {
                setIsSuccess(false);
                setIsError(true);
                setErrorMessage(error?.data?.message || "An error occurred while generating the bill.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-popup">
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={onClose}
                >
                  <HiOutlineX className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Generate Bill</h2>

                {isSuccess && <SuccessMessage message="Bill generated successfully!" onClose={closeMessages} />}
                {isError && <ErrorBox message={errorMessage} onClose={closeMessages} />}

                <p className="text-gray-600 text-sm mb-4">Select the user and role for the bill.</p>
                <div className="relative mb-6">
                <Field
  as="select"
  id="role"
  name="role"
  className="border-b-2 w-full py-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-teal-500 transition duration-200"
  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setUserType(value); 
    setFieldValue("role", value)
  }}
>
                    <option value="" disabled>Select a role</option>
                    <option value="client">Client</option>
                    <option value="interpreter">Interpreter</option>
                  </Field>
                  <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="relative mb-6">
                  <Field
                    as="select"
                    id="user"
                    name="user"
                    className="border-b-2 w-full py-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-teal-500 transition duration-200"
                  >
                    <option value="" disabled>Select a user</option>
                    {apidata?.map((user: any) => (
                      <option key={user.id} value={user.id}>
                        {user.username}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="user" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold p-3 rounded-md hover:from-teal-600 hover:to-blue-600 transition duration-200"
                  disabled={isSubmitting || isLoading}
                >
                  {isLoading || isSubmitting ? "Generating..." : "Generate Bill"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default PopupForm;
