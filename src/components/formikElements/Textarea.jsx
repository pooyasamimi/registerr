import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalErr from "./PersonalErr";

export default function Textarea({ name, label, height, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField
        style={{ height: height, resize: "none" }}
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
