import React from "react";
import { NavLink } from "react-router-dom";

const ProtectedNavlink = ({
    isAuthenticated,
    className,
    ...rest
  }) => (
    <NavLink
      className={`${isAuthenticated ? 'block' : 'hidden'} ${className}`}
      {...rest}
    />
  );
  export default ProtectedNavlink;

  