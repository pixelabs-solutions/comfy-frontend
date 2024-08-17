import * as React from 'react';
import Form from "../signup/components/form"

function AddUserForm() {
    return (
        <div className="flex w-[40%] flex-col items-center rounded-2xl bg-white px-20 py-10 translate-x-[75%] translate-y-[18%]">
            <h1 className="text-3xl font-semibold text-black">Add User</h1>
            <Form />
            {/* <SubmitButton /> */}
        </div>
    );
}

export default AddUserForm;
