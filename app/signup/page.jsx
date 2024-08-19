import * as React from 'react';
import Form from "../signup/components/form"
import Step2 from "../signup/components/step2"

function AddUserForm() {
    return (
        <div className="flex w-[40%] flex-col items-center rounded-2xl bg-white px-20 py-10 translate-x-[75%] translate-y-[18%]">
            <h1 className="text-3xl font-bold text-black">Add User</h1>
            {/* <Form /> */}
            <Step2 />
            {/* <SubmitButton /> */}
        </div>
    );
}

export default AddUserForm;
