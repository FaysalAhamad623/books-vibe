import React from 'react';

const Signup = () => {
  return (
    <fieldset className="bg-base-200 border border-base-300 rounded-box max-w-xs mx-auto my-10 p-4">
      <div className="text-center text-4xl font-bold mb-4">Sign Up</div>

      <label className="label">Name</label>
      <input type="text" className="input input-bordered w-full" placeholder="Your Name" />

      <label className="label mt-3">Email</label>
      <input type="email" className="input input-bordered w-full" placeholder="Email" />

      <label className="label mt-3">Password</label>
      <input type="password" className="input input-bordered w-full" placeholder="Password" />

      <label className="label mt-3">Confirm Password</label>
      <input type="password" className="input input-bordered w-full" placeholder="Confirm Password" />

      <button className="btn btn-neutral mt-6 w-full">Sign Up</button>
    </fieldset>
  );
};

export default Signup;
