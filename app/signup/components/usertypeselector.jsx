import * as React from 'react';

function UserTypeSelector() {
  return (
      <select name="" id="" className='w-full mt-10 p-3 outline-none text-md rounded-md text-[#37384D] text-[19px] bg-[#F5F7F9]'>
          <option value="Select User Type" aria-readonly>Select User Type</option>
          <option value="Select User Type" aria-readonly>Admin</option>
          <option value="Select User Type" aria-readonly>Sub Admin</option>
      </select>
  );
}

export default UserTypeSelector;