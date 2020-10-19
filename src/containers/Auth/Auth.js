import React, { useState } from "react";
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
const Auth = (props) => {
  const { mode } = props;
  const History = useHistory();
  const [state, setState] = useState({
    showPassword: false,
  });
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    wallet: "",
  });
  const handleChange = (event, mode) => {
    const { value } = event.target;
    if (mode === "Password") {
      setValues({ ...values, password: value });
    } else if (mode === "Email") {
      setValues({ ...values, email: value });
    }
    if (props.mode === "signup") {
      switch (mode) {
        case "Username":
          setValues({ ...values, username: value });
          break;
        case "Wallet":
          setValues({ ...values, wallet: value });
          break;
        default:
          break;
      }
    }
  };
  const handleClickShowPassword = () => {
    setState((prev) => ({ showPassword: !prev.showPassword }));
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (mode) => {
    if (mode === "login") {
      console.log("get user Data from api");
    } else if (mode === "signup") {
      console.log("send user Data to api");
    } else {
      History.replace("/404");
    }
  };
  function message(mode) {
    return (
      <Button
        to={`/${mode}`}
        className='registerBtn'
        onClick={() => History.replace(`/${mode}`)}>
        {mode === "login"
          ? "I Have already registered! Login"
          : "you are not registered? register"}
      </Button>
    );
  }
  let items = ["Username", "Email", "Wallet"];
  return (
    <SpLayout ContainerClass='containerAuth' img='userLoginImg'>
      <Grid item xs className='parentAllInputs'>
        <AuthItems
          items={mode === "signup" ? items : ['Email']}
          handleChange={handleChange}
          errorIndex={0}
        />
        <FormControl className='passwordLoginClass'>
          <InputLabel htmlFor='standard-adornment-password' dir='ltr'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={state.showPassword ? "text" : "password"}
            onChange={(e) => handleChange(e, "Password")}
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
