import React, {useEffect, useState} from "react";
import {FieldArray, Form, Formik} from "formik";
import * as yup from "yup";
import FavouritesFeild from "./formikElements/FavouritesField";
import FormikControl from "./formikElements/FormikControl";
import toast from "react-hot-toast";

const initialValues = {
    name: "",
    email: "",
    password: "",
    bio: "",
    address: {
        city: "",
        postalCode: "",
    },
    numbers: {mobile: "", telephone: ""},
    favourites: [""],
    gender: "",
    skills: [],
    education: "",
};

const educations = [
    {value: 6, label: "به تو چه"},
    {value: 1, label: "ابتدایی"},
    {value: 2, label: "سیکل"},
    {value: 3, label: "دیپلم"},
    {value: 4, label: "لیسانس"},
    {value: 5, label: "بالاتر لیسانس"},
];

const gender = [
    {id: 1, value: "مرد"},
    {id: 2, value: "زن"},
    {id: 3, value: "دوجنسه"},
];

const skills = [
    {id: 1, value: "HTML"},
    {id: 2, value: "CSS"},
    {id: 3, value: "JS"},
    {id: 4, value: "REACT"},
];

const onSubmit = (values, subProps) => {
    toast.success("با موفقیت انجام شد", {style: {fontSize: "1.1rem"}});
    setTimeout(() => {
        subProps.setSubmitting(false);
        // subProps.resetForm();
        window.location.reload();
    }, 2000);
};

const validationSchema = yup.object({
    name: yup
        .string()
        .required("لطفا این قسمت را پر کنید")
        .min(3, "لطفا اسم درست وارد کنید"),
    email: yup
        .string()
        .required("لطفا این قسمت را پر کنید")
        .email("با فرمت درست ایمیل را وارد کنید"),
    password: yup
        .string()
        .required("لطفا این قسمت را پر کنید")
        .min(5, "حداقل پنج کاراکتر")
        .max(10, "حداکثر ده کاراکتر"),
    address: yup.object({
        city: yup.string().required("لطفا این قسمت را پر کنید"),
        postalCode: yup
            .string()
            .required("لطفا این قسمت را پر کنید")
            .matches(
                "\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b",
                "کد پستی شما نادرست می‌باشد واقعی بنویس "
            ),
    }),
    numbers: yup.object({
        mobile: yup
            .string()
            .required("لطفا این قسمت را پر کنید")
            .matches(
                /((0?9)|(\+?989))\d{9}/g,
                "لطفا شماره موبایل را معتبر وارد کنید"
            ),
        telephone: yup
            .string()
            .required("لطفا این قسمت را پر کنید")
            .matches(/^0[0-9]{2,}[0-9]{7,}$/, "لطفا شماره تلفن ثابت معتبر وارد کنید"),
    }),

    bio: yup
        .string()
        .matches(
            /^[\u0600-\u06FF\s0-9a-zA-Z]+$/,
            "از کاراکتر های مجاز استفاده کنید"
        ),
    favourites: yup.array().of(yup.string().required("لطفا این قسمت را پر کنید")),
    education: yup.string().required("لطفا این قسمت را پر کنید"),
});

const Registerform = () => {
    const [saveData, setSaveData] = useState(null);
    // const [myValues, setMyValues] = useState(null);

    const handleSaveData = ({values}) => {
        localStorage.setItem("saveData", JSON.stringify(values));
    };

    const handleGetSaveData = (formik) => {
        formik.setValues(saveData);
    };

    useEffect(() => {
        const localSaveData = JSON.parse(localStorage.getItem("saveData"));
        setSaveData(localSaveData);
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnBlur={false}
            // validateOnChange={false}
            validateOnMount={true}
            // enableReinitialize
        >
            {(formik) => {
                return (
                    <div className="auth_container container-fluid d-flex justify-content-center w-100 h-100-vh p-0">
                        <div className="row w-100 justify-content-center align-items-center">
                            <div className="auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3">
                                <Form className="row">
                                    <h1 className="text-center">
                                        <i className="fas fa-user-plus text-primary"></i>
                                    </h1>
                                    <FormikControl
                                        type="text"
                                        name="name"
                                        label="نام"
                                        control="input"
                                    />

                                    <FormikControl
                                        type="text"
                                        name="email"
                                        label="ایمیل"
                                        control="input"
                                    />

                                    <FormikControl
                                        type="password"
                                        name="password"
                                        label="رمز عبور"
                                        control="input"
                                    />

                                    <FormikControl
                                        type="text"
                                        name="address.city"
                                        label="شهر"
                                        control="input"
                                    />
                                    <FormikControl
                                        type="text"
                                        name="address.postalCode"
                                        label="کد پستی"
                                        control="input"
                                    />
                                    <FormikControl
                                        className="col-6"
                                        type="text"
                                        name="numbers.mobile"
                                        label="شماره موبایل"
                                        control="input"
                                    />
                                    <FormikControl
                                        className="col-6"
                                        type="text"
                                        name="numbers.telephone"
                                        label="شماره تلفن ثابت"
                                        control="input"
                                    />

                                    <FormikControl
                                        name="gender"
                                        label="جنسیت"
                                        control="radio"
                                        options={gender}
                                    />

                                    <FormikControl
                                        name="skills"
                                        label="مهارت ها"
                                        control="checkbox"
                                        options={skills}
                                    />

                                    <FormikControl
                                        name="education"
                                        label="تحصیلات"
                                        control="select"
                                        options={educations}
                                    />

                                    <FormikControl
                                        name="bio"
                                        label="بیوگرافی"
                                        control="textarea"
                                        height="90px"
                                        placeholder="بیوگرافی مختصر"
                                    />

                                    <div className="mb-3">
                                        <FieldArray name="favourites">
                                            {(props) => <FavouritesFeild {...props} />}
                                        </FieldArray>
                                    </div>

                                    <div className="text-center w-100">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mx-2"
                                            disabled={
                                                formik.isSubmitting || !formik.isValid || !formik.dirty
                                            }
                                            onClick={() => handleSaveData(formik)}
                                        >
                                            {formik.isSubmitting ? (
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            ) : (
                                                "ثبت نام"
                                            )}
                                        </button>

                                        <button
                                            type="reset"
                                            className="btn btn-danger mx-2"
                                            disabled={!formik.dirty}
                                        >
                                            پاکسازی
                                        </button>

                                        {saveData && (
                                            <button
                                                type="button"
                                                className="btn btn-success mx-2 btn-get"
                                                onClick={() => handleGetSaveData(formik)}
                                            >
                                                دریافت اطلاعات دفعه قبلی
                                            </button>
                                        )}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default Registerform;
