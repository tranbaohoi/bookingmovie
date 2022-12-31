import React from "react";
import { Navigate } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

const CheckoutTemplate =
  (Component) =>
  ({ ...props }) => {
    if (!localStorage.getItem(USER_LOGIN)) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };

export default CheckoutTemplate;
