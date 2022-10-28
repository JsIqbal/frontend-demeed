import { string, object } from "yup";

export const loginSchema = object().shape({
    email: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long."),
    password: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long.")
        .max(25,"This field minimum 25 character long."),
});