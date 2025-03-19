import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./register.scss";

export default function Register() {
  const [userMessage, setUserMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const mySchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Not less than 3 chars")
      .max(18, "Not more than 18 chars"),
    email: Yup.string()
      .required("Email is required")
      .email("Not a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "Not a valid password"),
    rePassword: Yup.string()
      .required("Re-enter password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^(002)?01[0125][0-9]{8}$/, "Not a valid phone number"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => registerForm(values),
  });

  async function registerForm(values) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      setUserMessage(data.message);
      setErrorMessage(null);
      navigate("/login");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Registration failed");
      setUserMessage(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="register">
      <div className="cardd">
        <div className="left p-4">
          <h1>Register</h1>

          {userMessage && (
            <div className="alert alert-success p-2">{userMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger p-2">{errorMessage}</div>
          )}

          <form onSubmit={formik.handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control my-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control my-2"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control my-2"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}

            {/* Re-Password */}
            <input
              type="password"
              name="rePassword"
              placeholder="Re-enter Password"
              className="form-control my-2"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="text-danger">{formik.errors.rePassword}</div>
            )}

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="form-control my-2"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-danger">{formik.errors.phone}</div>
            )}

            {/* Submit */}
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-danger w-100"
                disabled={!(formik.isValid && formik.dirty) || isLoading}
              >
                {isLoading ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  "Register Now"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="right d-flex flex-column p-5 text-white align-items-center">
          <h1 className="display-3 fw-bold">Lama Social</h1>
          <p className="py-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            iste suscipit quos eius tenetur molestiae magni quae impedit, harum
            ea.
          </p>
          <span className="fw-bold mt-5">Do You have an account?</span>
          <Link to="/login">
            <button className="mt-1 btn btn-outline-dark text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
