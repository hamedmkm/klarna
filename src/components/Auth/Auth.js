import React, { useState, useReducer } from "react";
import "./Auth.css";
import {
  Grid,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SpLayout from "../../shared/layout/SpLayout";
import Back from "../../shared/style/Back";
import AuthItems from "./AuthItems";
import { useHistory } from "react-router-dom";
import { useValidate } from "../../hooks/useValidator";
const Auth = (props) => {
  const { mode } = props;
  const History = useHistory();
  const [state, setState] = useState({
    showPassword: false,
    submited: false
  });
  const initialState = {
    email: "",
    username: "",
    password: "",
    wallet: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Password":
        return { ...state, password: action.value};
      case "Username":
        return { ...state, username: action.value};
      case "Email":
        return { ...state, email: action.value };
      case "Wallet":
        return { ...state, wallet: action.value};
      case "resetForm":
        return { ...initialState };
      default:
        throw new Error("Unexpected");
    }
  };
  const [stateValue, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event, mode) => {
    dispatch({ type: mode, value: event.target.value });    
  };
  const handleClickShowPassword = () => {
    setState((prev) => ({ showPassword: !prev.showPassword }));
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const isEmail = useValidate('email',stateValue.email)
  const isUsername = useValidate('username',stateValue.username)
  const isWallet = useValidate('wallet',stateValue.wallet)
  const isPassword = useValidate('password',stateValue.password)
  const handleSubmit = (mode) => {
    setState({...state,submited: true})
    if (mode === "login") {
      console.log("get user Data from api");
    } else if (mode === "signup") {
      console.log("send user Data to api");
    } else {
      History.replace("/404");
    }
  };
  const message = (mode) => {
    return (
      <Button
        to={`/${mode}`}
        className='registerBtn'
        onClick={() => {
          dispatch({ type: "resetForm" });
          setState({...state,submited: false})
          History.replace(`/${mode}`);
        }}>
        {mode === "login"
          ? "I Have already registered! Login"
          : "you are not registered? register"}
      </Button>
    );
  }

  const Inputs = (inputName, error, value) => {
    return (
      <AuthItems
        inputName={inputName}
        error={error}
        change={handleChange}
        value={value}
      />
    );
  }
  return (
    <SpLayout ContainerClass='containerAuth' img='userLoginImg'>
      <Grid item xs className='parentAllInputs'>
        {mode === "signup" && Inputs("Username", state.submited ? !isUsername: false, stateValue.username)}
        {Inputs("Email",state.submited ? !isEmail: false, stateValue.email)}
        {mode === "signup" && Inputs("Wallet", state.submited ? !isWallet: false, stateValue.wallet)}
        <FormControl className='passwordLoginClass'>
          <InputLabel htmlFor='standard-adornment-password' dir='ltr'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={state.showPassword ? "text" : "password"}
            onChange={(e) => handleChange(e, "Password")}
            value={stateValue.password}
            error={state.submited ? !isPassword : false}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  style={{ marginTop: "-6px" }}
                  aria-label='toggle Password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            dir='ltr'
          />
        </FormControl>
        <Grid item style={{ textAlign: "left" }}>
          {message(mode === "signup" ? "login" : "signup")}
        </Grid>
        <Grid item className='loginButtonsBox'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => handleSubmit(mode)}>
            {mode}
          </Button>
          <Back route='/' />
        </Grid>
      </Grid>
    </SpLayout>
  );
};

export default Auth;
