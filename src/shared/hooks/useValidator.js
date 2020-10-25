export const useValidate = (mode, value) => {
  let err = null;
  if (mode === "email") {
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? (err = true)
      : (err = false);
    return err;
  }
  if (mode === "username") {
    /^[A-Z0-9]{5,22}$/i.test(value) 
    ? (err = true) 
    : (err = false);
    return err
  }
  if(mode === 'wallet') {
    /^[A-Z0-9]{42,45}$/i.test(value) 
    ? (err = true) 
    : (err = false);
    return err
  }
  if(mode === 'password') {
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value) 
    ? (err = true) 
    : (err = false);
    return err
  }
};
