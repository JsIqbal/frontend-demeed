import { string, object } from 'yup';

export const permissionSetNameSchema = object().shape(
    {
        permissionSetName: string()
            .required("This field must not be empty."),
        description: string()
        .required("This field must not be empty.")
    }
);