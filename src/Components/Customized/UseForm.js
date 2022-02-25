import React from "react";
export const initialStateRegister = {
  username: "",
  email: "",
  password: "",
};
export const initialStateLogin = {
  username: "",
  password: "",
};
export function UseForm() {
  const [loginValues, setLoginValues] = React.useState(initialStateLogin);
  const [registerValues, setRegisterValues] =
    React.useState(initialStateRegister);
  const [passwordShow, setPasswordShow] = React.useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };
  const handleFormClear = () => {
    setLoginValues(initialStateLogin);
  };
  const handleShowPassword = () => {
    setPasswordShow((prevpasswordShow) => !prevpasswordShow);
  };
  return {
    handleInputChange,
    loginValues,
    registerValues,
    passwordShow,
    handleShowPassword,
    handleFormClear,
  };
}

export function Form({ children, ...others }) {
  return (
    <form autoComplete="on" {...others}>
      {children}
    </form>
  );
}
