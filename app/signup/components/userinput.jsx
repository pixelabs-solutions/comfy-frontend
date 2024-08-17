import * as React from 'react';

function UserInputField({ type, label, iconSrc, iconAlt }) {
  return (
    <div className="flex flex-1 flex-auto gap-10 px-5 py-5 rounded-lg bg-slate-100 max-md:pl-5">
      <label className="text-xl text-neutral-400">{label}</label>
      <div className="flex flex-col my-auto">
        <img loading="lazy" src={iconSrc} alt={iconAlt} className="object-contain w-4 aspect-square" />
      </div>
    </div>
  );
}

export default UserInputField;