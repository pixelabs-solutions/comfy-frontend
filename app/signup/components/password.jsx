import * as React from 'react';

function PasswordInputFields() {
  return (
    <section className="flex flex-wrap gap-4 mt-4 w-full max-w-[637px] max-md:max-w-full">
      <div className="flex flex-1 flex-auto gap-10 px-7 py-5 rounded-lg bg-slate-100 max-md:pl-5">
        <label className="text-xl text-neutral-400">Create Password</label>
        <div className="flex flex-col self-start mt-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/787c2f62a01d11cbc1ef137eb8c82c7c05377206af3a655621c14215790cb5a8?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6" alt="Create password icon" className="object-contain w-5 aspect-[1.11]" />
        </div>
      </div>
      <div className="flex flex-1 flex-auto gap-10 px-7 py-5 rounded-lg bg-slate-100 max-md:pl-5">
        <label className="text-xl text-neutral-400">Confirm Password</label>
        <div className="flex flex-col self-start mt-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87200c144fa7f1f1a23639eff0b30e81a140d5356deb37c5cbc9206daf84c756?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6" alt="Confirm password icon" className="object-contain w-5 aspect-[1.11]" />
        </div>
      </div>
    </section>
  );
}

export default PasswordInputFields;