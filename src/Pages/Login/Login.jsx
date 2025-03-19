import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TokenContext } from "../../context/TokenContext";
import "./login.scss";

export default function Login() {
  const [userMessage, setUserMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);

  const mySchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Not a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "Not a valid password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  async function loginUser(values) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("username",data.user.name)
      
      setToken(data.token);
      setUserMessage(data.message);
      setErrorMessage(null);
      navigate("/");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login">
      <div className="cardd">
        <div className="left d-flex flex-column p-5 text-white align-items-center">
          <h1 className="display-3 fw-bold">Hello World</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            iste suscipit quos eius tenetur molestiae magni quae impedit, harum
            ea.
          </p>
          <span className="fw-bold mt-5">Don't have an account?</span>
          <Link to="/register">
            <button className="mt-1 btn btn-outline-dark text-white">
              Register
            </button>
          </Link>
        </div>

        <div className="right p-4">
          <h1>Login</h1>

          {errorMessage && (
            <div className="alert alert-danger p-2">{errorMessage}</div>
          )}
          {userMessage && (
            <div className="alert alert-success p-2">{userMessage}</div>
          )}

          <form onSubmit={formik.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control my-2"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control my-2"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}

            <button
              type="submit"
              className="btn btn-dark w-100 mt-3"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
