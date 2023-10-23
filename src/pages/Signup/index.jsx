import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { Checkbox, FormControlLabel } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
function Copyright(props) {
  return (
    <p className="text-sm text-center text-gray-500" {...props}>
      {"Copyright © "}
      <a href="#" className="text-blue-500">
        CornHub
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-2xl">
        <div className="text-center">
          <div className="p-3 mx-auto rounded-full bg-secondary-main">
            <LockOutlined />
          </div>
          <h1 className="mt-4 text-2xl font-semibold">
            Sign up and start learning
          </h1>
        </div>
        <form className="mt-8 mb-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className=" md:col-span-1">
              <Input
                className="w-full p-3 border border-gray-300 rounded"
                label="First Name"
                type="name"
                placeholder="Last Name"
                required
                fullWidth
                autoFocus
              />
            </div>
            <div className="md:col-span-1">
              <Input
                className="w-full p-3 border border-gray-300 rounded"
                label="Last Name"
                type="name"
                placeholder="Last Name"
                required
                fullWidth
                autoFocus
              />
            </div>
            <div className="md:col-span-2">
              <Input
                className="w-full p-3 border border-gray-300 rounded"
                label="Email Address"
                type="email"
                placeholder="Email Address"
                required
                fullWidth
                autoFocus
              />
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
          </div>
          <div className="flex mt-4 mb-4">
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive special offers, personalized recommendations and
                learning tips via email."
            />
          </div>
          <Button label="Sign Up" type="submit" className="mt-5" />

          <div className="mt-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-base font-semibold text-blue-500">
              Sign in
            </Link>
          </div>
        </form>
        <Copyright className="mt-5" />
      </div>
    </div>
  );
}
