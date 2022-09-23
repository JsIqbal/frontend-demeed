import React from "react";

import AdminRoutes from "./permission-set.routes";
import PermissionSet from "./components/permission-set.component";

export function AdminClientRoutes (props) {
    return (
        <AdminRoutes path={props.path} />
    );
}

export { PermissionSet };