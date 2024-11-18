import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalErr from "./PersonalErr";

export default function Input({ name, label, type, className }) {
  return (
    <div className={`mb-2 ${className}`}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={label}
      />
      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
