import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useUser } from "../../Providers/user";
import { StyledForm, FormTitle, CheckboxContainer } from "./style";
import Input from "../Input";
import Button from "../Button";
import { useDidUpdate } from "rooks";

const Form = ({ name }) => {
  const history = useHistory();

  const { registerUser, loginUser, userLogged } = useUser();

  const registerSchema = yup.object().shape({
    userName: yup
      .string()
      .required("* Required field!")
      .min(4, "* Minimun 4 characters!")
      .max(18, "* Maximun 18 characters!"),
    email: yup
      .string()
      .required("* Required field!")
      .email("* Email not valid!"),
    password: yup
      .string()
      .required("* Required field!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character!"
      ),
    confirmPassword: yup
      .string()
      .required("* Required field!")
      .oneOf([yup.ref("password"), null], "* Passwords must match!"),
  });

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("* Required field!")
      .email("* Email not valid!"),
    password: yup.string().required("* Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      name.toLowerCase() === "register" ? registerSchema : loginSchema
    ),
  });

  const handleLogin = (data) => {
    loginUser(data);
  };

  useDidUpdate(() => {
    if(userLogged) history.push('/')
  },[userLogged])

  const handleRegister = (data) => {
    const user = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };
    registerUser(user);
  };

  switch (name.toLowerCase()) {
    case "login":
      return (
        <>
          <ToastContainer />
          <StyledForm onSubmit={handleSubmit(handleLogin)}>
            <FormTitle>{name}</FormTitle>
            <Input
              type="text"
              description="Email:"
              placeholder="Type your email here"
              name="email"
              register={register}
              error={errors.userName?.message}
            />
            <Input
              type="password"
              description="Password:"
              placeholder="Type your password here"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <section>
              <span>Don't have an account yet?</span>
              <Link to="/register">Click here</Link>
            </section>
            <Button colorSchema="--primary-gradient">Login</Button>
          </StyledForm>
        </>
      );

    case "register":
      return (
        <StyledForm onSubmit={handleSubmit(handleRegister)}>
          <FormTitle>{name}</FormTitle>
          <Input
            type="text"
            description="Username"
            placeholder="Type your username here"
            name="userName"
            register={register}
            error={errors.userName?.message}
          />
          <Input
            type="text"
            description="Email"
            placeholder="Type your email here"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            description="Password"
            placeholder="Type your password here"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            type="password"
            description="Confirm Password"
            placeholder="Confirm your password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
          />
          <CheckboxContainer>
            <input type="checkbox" />
            <p>I agree to company terms and conditions</p>
          </CheckboxContainer>
          <Button colorSchema="--primary-gradient">Register</Button>
          <section>
            <span>Already have an account?</span>
            <Link to="/login">Click here</Link>
          </section>
        </StyledForm>
      );

    default:
      return null;
  }
};

export default Form;
