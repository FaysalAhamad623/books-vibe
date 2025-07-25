import React from 'react';

const Login = () => {
  return (
    <fieldset className="bg-base-200 border border-base-300 rounded-box w-full max-w-sm mx-auto p-6 my-10">
      <div className="text-center text-3xl sm:text-4xl font-bold mb-6">Login</div>

      <label className="label">Email</label>
      <input
        type="email"
        className="input input-bordered w-full"
        placeholder="Email"
      />

      <label className="label mt-4">Password</label>
      <input
        type="password"
        className="input input-bordered w-full"
        placeholder="Password"
      />

      <button className="btn btn-neutral w-full mt-6">Login</button>
    </fieldset>
  );
};

export default Login;
