import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Checkbox, FormControlLabel } from "@mui/material";


function Copyright(props) {
  return (
    <p className="text-sm text-center text-gray-500" {...props}>
      {"Copyright © "}
      <a href="#" className="text-blue-500">
        CornHub
      </a>{" "}
      {new Date().getFullYear()} {"."}
    </p>
  );
}

export default function Login() {
  return (
    <div className="flex flex-col h-screen px-6 py-6 md:flex-row">
      <div
        className="flex flex-1 px-10 bg-center bg-cover md:bg-contain "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/boy-studying-with-computer-and-books-vector-illustration-concept-in-cartoon-style_113065-1082.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-1 items-center justify-center rounded-[15px] shadow-[rgba(0,_0,_0,_0.3)_0px_20px_60px]">
        <div className="w-4/5 max-w-md">
          <div className="text-center">
            <div className="p-3 mx-auto rounded-full bg-secondary-main">
              <LockOutlinedIcon />
            </div>
            <h1 className="mt-4 text-2xl font-semibold">Sign in</h1>
          </div>
          <form className="mt-8">
            <div className="mb-2">
              <Input
                className="w-full p-3 border border-gray-300 rounded"
                label="Email Address"
                type="email"
                placeholder="Email Address"
                required
                fullWidth
                autoFocus
              />
            </div>
            <div className="mb-4">
              <Input
                className="w-full p-3 border border-gray-300 rounded"
                label="Password"
                type="password"
                placeholder="Password"
                required
                fullWidth
                autoFocus
              />
            </div>
            <div className="flex items-center mb-4">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className="flex items-end justify-end flex-1">
                <Link to="/notfound" className="text-base font-semibold text-blue-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button label="Sign In" type="submit" className="mt-5" />
            <div className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-base font-semibold text-blue-500">
                Sign up
              </Link>
            </div>
          </form>
          <Copyright className="mt-5" />
        </div>
      </div>
    </div>
  );
}
