import React from "react";

import AdminRoutes from "./admin.routes";
import Login from "./components/login.component";

export function AdminClientRoutes (props) {
    return (
        <AdminRoutes path={props.path} />
    );
}

export { Login };