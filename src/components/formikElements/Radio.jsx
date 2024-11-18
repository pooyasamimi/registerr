import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalErr from "./PersonalErr";

export default function Radio({ name, label, options }) {
  return (
    <div className="d-flex flex-wrap mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField className="form-control" id={name} name={name}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <div className="d-flex radio xd align-items-center" key={item.id}>
                <input
                  className="form-check-input me-4"
                  type="radio"
                  id={`radio-${item.id}`}
                  {...field}
                  value={item.id}
                  checked={field.value == item.id}
                />
                <label htmlFor={`radio-${item.id}`} className="mx-1 ms-4">
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
