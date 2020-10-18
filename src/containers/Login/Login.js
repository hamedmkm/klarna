import React, { useState } from "react";
import "./Login.css";
import {
  Container,
  Grid,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useHistory } from 'react-router-dom'
const Login = () => {
  const [values, setValue] = useState({
    showPassword: false,
  });
  const  history = useHistory()
  const handleChange = () => {};
  const handleClickShowPassword = () => {
    setValue((prev) => ({ showPassword: !prev.showPassword }));
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const goPrevPage = () => {
    history.replace('/');
  }
  return (
    <Container fixed maxWidth='sm' className='loginContainer'>
      <Grid
        container
        justify='center'
        alignItems='center'
        className='userLogin formItem'
        spacing={10}>
        <Grid item xs>
          <FormControl style={{ marginBottom: "10px", width: "100%" }}>
            <TextField
              id='standard-multiline-flexible'
              label='Email'
              rowsMax={1}
              onChange={handleChange}
              dir='ltr'
            />
          </FormControl>
          <FormControl className='passwordLoginClass' >
            <InputLabel htmlFor='standard-adornment-password' dir='ltr'>
              Password
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    style={{ marginTop: "-6px" }}
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              dir='ltr'
            />
          </FormControl>
            <Grid container spacing={2} className='loginButtonsBox'>
            <Button variant='contained' color='primary'>
            Login
          </Button>
              <Button onClick={goPrevPage} style={{color: '#4c4c4c'}}>
                back 
                <KeyboardReturnIcon />
              </Button>
            </Grid>
        </Grid>
        <Grid item sm className='userLoginImg'></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
