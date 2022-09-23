// all schema validation will be here.

import { string, object } from 'yup';

export const loginSchema = object().shape(
    {
        email: string()
            .required("This field must not be empty."),
        password: string()
            .required("This field must not be empty."),
    }
);