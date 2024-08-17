import * as React from 'react';

function NameInputFields() {
  return (
    <section className="flex flex-wrap gap-4 mt-3.5 w-full text-xl max-w-[637px] text-neutral-400 max-md:max-w-full">
      <div className="px-5 py-5 rounded-lg bg-slate-100 max-md:px-5">Last name</div>
      <div className="px-5 py-5 rounded-lg bg-slate-100 max-md:px-5">Middle name</div>
      <div className="px-5 py-5 rounded-lg bg-slate-100 max-md:px-5">First name</div>
    </section>
  );
}

export default NameInputFields;