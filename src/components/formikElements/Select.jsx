import { ErrorMessage, FastField } from "formik";
import React from "react";
import Select from "react-select";

import PersonalErr from "./PersonalErr";

export default function Input({ name, label, options }) {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField name={name}>
        {({ form }) => {
          const value = form.values.education;
          const handleValue = (options, value) => {
            return value ? options.find((item) => item.value === value) : null;
          };

          return (
            <Select
              value={handleValue(options, value)}
              placeholder="انتخاب کنید ..."
              options={options}
              onChange={(e) => {
                return form.setFieldValue("education", e.value);
              }}
              onBlur={() => {
                form.setTouched({ ...form.touched, education: true });
              }}
            />
          );
        }}
      </FastField>
      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
