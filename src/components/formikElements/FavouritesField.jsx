import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalErr from "./PersonalErr";

export default function FavouritesFeild(props) {
  const { form, push, remove } = props;

  const { favourites } = form.values;

  return (
    <>
      <>
        <i
          className="fas fa-plus text-success mx-3 pointer"
          onClick={() => push("")}
        ></i>
        <label htmlFor="telePhone" className="form-label">
          فیوریتز
        </label>
        {favourites.map((f, i) => (
          <div key={i} className="position-relative">
            <FastField
              type="text"
              className="form-control"
              name={`favourites[${i}]`}
              placeholder="..."
            />
            {favourites.length > 1 ? (
              <i
                className="fas fa-minus-circle text-danger mx-1 pointer delete_icon"
                onClick={() => remove(i)}
              ></i>
            ) : null}
            <ErrorMessage name={`favourites[${i}]`} component={PersonalErr} />
          </div>
        ))}
      </>
    </>
  );
}
