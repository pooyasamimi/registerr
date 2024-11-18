import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalErr from "./PersonalErr";

export default function Checkbox({ name, label, options }) {
  return (
    <div className="d-flex flex-wrap mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField className="form-control" id={name} name={name}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <div className="d-flex xd" key={item.id}>
                <input
                  className="form-check-input me-4"
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  {...field}
                  value={item.value}
                  checked={field.value.includes(item.value)}
                />
                <label htmlFor={`checkbox-${item.id}`} className="mx-1 ms-2">
                  {item.value}
                </label>
              </div>
            );
          });
        }}
      </FastField>
      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
