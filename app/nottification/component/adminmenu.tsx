import React from 'react';

const menuItems = [
  { title: "Sub Admin's" },
  { title: "Billing Manager's" },
  { title: "Interpreter's" },
  { title: "Client's" }
];

function MenuList() {
  return (
    <nav className="flex flex-col absolute right-0 items-start p-5 text-lg font-medium text-gray-500 bg-white rounded-lg border border-solid border-black border-opacity-0  shadow-xl w-[191px]">
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <p className='text-sm hover:text-blue-500 cursor-pointer'>{item.title}</p>
          {index !== menuItems.length - 1 && (
            <div className="shrink-0 self-stretch my-2 h-px border border-solid border-neutral-300"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default MenuList;
