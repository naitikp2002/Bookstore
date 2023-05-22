import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'cyan',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  h2:{
    textAlign: "center",
  }
});
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.h2}>Login</h2>
    </div>
  );
};

export default Login;
