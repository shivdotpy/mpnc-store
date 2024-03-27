import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter username"),
  password: Yup.string().required("Please enter username"),
});

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        alert("are bc");
      }}
      validationSchema={LoginSchema}
    >
      {({ isValid }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
          className="bg-slate-100 rounded-xl p-8 w-1/3"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
            className="w-full"
          >
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name:
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error text-red-500 font-light"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
            className="w-full"
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error text-red-500 font-light"
            />
          </div>
          <button
            type="submit"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};
