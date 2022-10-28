import React from "react";

import PermissionsRoute from "./permissions.routes";
import Permissions from "./components/permissions.component";
import CreateUser from "./components/create-user.component";

export function PermissionsClientRoutes () {
    return <PermissionsRoute />;
}

export { Permissions, CreateUser };